import { NextResponse } from 'next/server';

// Configuration pour l'export statique
export const dynamic = "force-static";

// Configuration n8n
const N8N_BASE_URL = process.env.N8N_BASE_URL || 'http://localhost:5678';
const N8N_API_KEY = process.env.N8N_API_KEY || '';

export async function GET() {
    try {
        // Récupérer les exécutions depuis n8n
        const response = await fetch(`${N8N_BASE_URL}/api/v1/executions`, {
            headers: {
                'X-N8N-API-KEY': N8N_API_KEY,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const executions = await response.json();

        // Calculer les statistiques
        const now = new Date();
        const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        const recentExecutions = executions.data?.filter(exec => 
            new Date(exec.startedAt) >= sevenDaysAgo
        ) || [];

        const failedExecutions = recentExecutions.filter(exec => 
            exec.finished === false || exec.status === 'error'
        );

        const successfulExecutions = recentExecutions.filter(exec => 
            exec.finished === true && exec.status === 'success'
        );

        const avgRuntime = recentExecutions.length > 0 
            ? recentExecutions.reduce((sum, exec) => {
                const start = new Date(exec.startedAt);
                const end = new Date(exec.stoppedAt || exec.startedAt);
                return sum + (end - start);
            }, 0) / recentExecutions.length / 1000 // en secondes
            : 0;

        const stats = {
            totalExecutions: recentExecutions.length,
            failedExecutions: failedExecutions.length,
            successfulExecutions: successfulExecutions.length,
            failureRate: recentExecutions.length > 0 
                ? Math.round((failedExecutions.length / recentExecutions.length) * 100)
                : 0,
            avgRuntime: `${avgRuntime.toFixed(2)}s`,
            timeSaved: successfulExecutions.length * 2 // estimation
        };

        return NextResponse.json({
            success: true,
            stats,
            executions: recentExecutions.slice(0, 10).map(exec => ({
                id: exec.id,
                workflowName: exec.workflowData?.name || 'Unknown',
                status: exec.finished ? (exec.status || 'success') : 'running',
                startedAt: exec.startedAt,
                duration: exec.stoppedAt 
                    ? ((new Date(exec.stoppedAt) - new Date(exec.startedAt)) / 1000).toFixed(2) + 's'
                    : 'En cours...'
            }))
        });

    } catch (error) {
        console.error('Erreur récupération exécutions:', error);
        
        // Données de démonstration en cas d'erreur
        const mockStats = {
            totalExecutions: 76,
            failedExecutions: 76,
            successfulExecutions: 0,
            failureRate: 100,
            avgRuntime: '0.05s',
            timeSaved: 0
        };

        const mockExecutions = [
            {
                id: '1',
                workflowName: 'Quantum | 01 - Health Check',
                status: 'error',
                startedAt: new Date(Date.now() - 3600000).toISOString(),
                duration: '0.05s'
            },
            {
                id: '2',
                workflowName: 'Email Risk Report',
                status: 'error',
                startedAt: new Date(Date.now() - 7200000).toISOString(),
                duration: '0.02s'
            },
            {
                id: '3',
                workflowName: 'Quantum | 02 - Credits Probe',
                status: 'error',
                startedAt: new Date(Date.now() - 10800000).toISOString(),
                duration: '0.03s'
            }
        ];

        return NextResponse.json({
            success: false,
            error: 'Mode démonstration - n8n non connecté',
            stats: mockStats,
            executions: mockExecutions,
            demo: true
        });
    }
}

// Endpoint pour obtenir les détails d'une exécution spécifique
export async function POST(request) {
    try {
        const { executionId } = await request.json();

        const response = await fetch(`${N8N_BASE_URL}/api/v1/executions/${executionId}`, {
            headers: {
                'X-N8N-API-KEY': N8N_API_KEY,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const executionDetails = await response.json();

        return NextResponse.json({
            success: true,
            execution: {
                id: executionDetails.id,
                workflowName: executionDetails.workflowData?.name,
                status: executionDetails.finished ? (executionDetails.status || 'success') : 'running',
                startedAt: executionDetails.startedAt,
                stoppedAt: executionDetails.stoppedAt,
                duration: executionDetails.stoppedAt 
                    ? ((new Date(executionDetails.stoppedAt) - new Date(executionDetails.startedAt)) / 1000).toFixed(2) + 's'
                    : 'En cours...',
                data: executionDetails.data,
                error: executionDetails.data?.resultData?.error
            }
        });

    } catch (error) {
        console.error('Erreur détails exécution:', error);
        
        return NextResponse.json({
            success: false,
            error: 'Impossible de récupérer les détails de l\'exécution',
            demo: true
        });
    }
}