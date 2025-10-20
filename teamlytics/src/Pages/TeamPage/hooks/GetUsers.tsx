import {useQuery} from "@tanstack/react-query";
import type {CompletedUser} from "@/sdk";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

async function fetchTeam(): Promise<CompletedUser[]> {
    const response = await fetch(`${BACKEND_URL}/users`, {
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
    return useQuery<CompletedUser[]>({
        queryKey: ["team"],
        queryFn: fetchTeam,
    })
}