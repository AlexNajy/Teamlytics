import {type CompletedUser, type User} from "@/sdk";
import {useState} from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function useCreateUser() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    const createUser = async (user: User): Promise<CompletedUser> => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(`${BACKEND_URL}/users`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            if (!response.ok) {
                throw new Error(`Failed to create user: ${response.statusText}`)
            }

            return await response.json()

        } catch (err) {
            const error = err instanceof Error ? err : new Error("Unknown error")
            setError(error)
            throw error
        } finally {
            setIsLoading(false)
        }
    }
    return {createUser, isLoading, error}
}
