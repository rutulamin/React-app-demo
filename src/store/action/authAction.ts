import { TRY_AUTH } from "../types/authTypes"

export const tryAuth = (authData: any) => {
    return {
        type: TRY_AUTH,
        payload: authData,
    }
}