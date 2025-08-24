import { NextResponse } from 'next/server';

// Configuration pour l'export statique
export const dynamic = "force-static";

// Configuration n8n (à mettre dans les variables d'environnement)
const N8N_BASE_URL = process.env.N8N_BASE_URL || 'http://localhost:5678';
const N8N_API_KEY = process.env.N8N_API_KEY || '';

export async function GET() {
    try {
        // Récupérer la liste des workflows depuis n8n
        const response = await fetch(`${N8N_BASE_URL}/api/v1/workflows`, {
            headers: {
                'X-N8N-API-KEY': N8N_API_KEY,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const workflows = await response.json();

        // Transformer les données pour notre interface
        const transformedWorkflows = workflows.data?.map(workflow => ({
            id: workflow.id,
            name: workflow.name,
            active: workflow.active,
            lastUpdated: new Date(workflow.updatedAt).toLocaleDateString('fr-FR'),
            nodeCount: workflow.nodes?.length || 0,
            tags: workflow.tags || []
        })) || [];

        return NextResponse.json({
            success: true,
            workflows: transformedWorkflows,
            total: workflows.data?.length || 0
        });

    } catch (error) {
        console.error('Erreur connexion n8n:', error);
        
        // Retourner des données de démonstration en cas d'erreur
        const mockWorkflows = [
            {
                id: 'quantum-health-check',
                name: 'Quantum | 01 - Health Check',
                active: true,
                lastUpdated: '13/08/2025',
                nodeCount: 5,
                tags: ['monitoring', 'quantum']
            },
            {
                id: 'quantum-credits-probe',
                name: 'Quantum | 02 - Credits Probe',
                active: true,
                lastUpdated: '13/08/2025',
                nodeCount: 3,
                tags: ['monitoring', 'credits']
            },
            {
                id: 'quantum-router',
                name: 'Quantum | 03 - Router',
                active: true,
                lastUpdated: '13/08/2025',
                nodeCount: 8,
                tags: ['core', 'routing']
            },
            {
                id: 'quantum-portfolio-qaoa',
                name: 'Quantum | 05 - Portfolio QAOA',
                active: true,
                lastUpdated: '11/08/2025',
                nodeCount: 12,
                tags: ['algorithms', 'qaoa', 'portfolio']
            },
            {
                id: 'quantum-arbitrage',
                name: 'Quantum | 06 - Arbitrage Commodities',
                active: true,
                lastUpdated: '11/08/2025',
                nodeCount: 15,
                tags: ['finance', 'arbitrage']
            },
            {
                id: 'github-file-creator',
                name: 'GitHub File Creator - Quantum Integration',
                active: false,
                lastUpdated: '12/08/2025',
                nodeCount: 6,
                tags: ['integration', 'github']
            }
        ];

        return NextResponse.json({
            success: false,
            error: 'Connexion n8n non disponible - Mode démonstration',
            workflows: mockWorkflows,
            total: mockWorkflows.length,
            demo: true
        });
    }
}

export async function POST(request) {
    try {
        const { workflowId, action } = await request.json();

        if (action === 'trigger') {
            // Déclencher un workflow
            const response = await fetch(`${N8N_BASE_URL}/api/v1/workflows/${workflowId}/activate`, {
                method: 'POST',
                headers: {
                    'X-N8N-API-KEY': N8N_API_KEY,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            return NextResponse.json({
                success: true,
                message: `Workflow ${workflowId} déclenché avec succès`,
                result
            });
        }

        if (action === 'toggle') {
            // Activer/désactiver un workflow
            const response = await fetch(`${N8N_BASE_URL}/api/v1/workflows/${workflowId}/activate`, {
                method: 'POST',
                headers: {
                    'X-N8N-API-KEY': N8N_API_KEY,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ active: true })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return NextResponse.json({
                success: true,
                message: `Workflow ${workflowId} activé/désactivé`
            });
        }

        return NextResponse.json({
            success: false,
            error: 'Action non reconnue'
        }, { status: 400 });

    } catch (error) {
        console.error('Erreur action workflow:', error);
        
        return NextResponse.json({
            success: false,
            error: 'Erreur lors de l\'exécution de l\'action',
            demo: true,
            message: 'Action simulée en mode démonstration'
        });
    }
}