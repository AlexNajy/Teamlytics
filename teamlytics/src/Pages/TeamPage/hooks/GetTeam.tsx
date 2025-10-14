import {useQuery} from "@tanstack/react-query";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

async function fetchTeam(): Promise<any[]> {
    const response = await fetch(`${BACKEND_URL}/team`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch team: ${response.statusText}`)
    }
        return response.json()
}
export function useGetTeam() {
    return useQuery<any[]>({
        queryKey: ["team"],
        queryFn: fetchTeam,
    })
}