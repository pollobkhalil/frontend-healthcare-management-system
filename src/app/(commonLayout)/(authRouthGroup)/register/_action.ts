/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { httpClient } from "@/src/lib/axios/httpClient";
import { setTokenInCookies } from "@/src/lib/tokenUtils";
import { ApiErrorResponse } from "@/src/types/api.types";
import { redirect } from "next/navigation";
// Tomar register er jonno zod schema ba payload type ekhane import korbe
// import { IRegisterPayload, registerZodSchema } from "@/src/zod/auth.validation";

export const registerAction = async (payload: any): Promise<any | ApiErrorResponse> => {
    // 1. Zod Validation (Jodi thake)
    // const parsedPayload = registerZodSchema.safeParse(payload);
    // if (!parsedPayload.success) {
    //     return { success: false, message: "Invalid input" };
    // }

    try {
        // 2. Backend API Call
        const response = await httpClient.post("/auth/register", payload);

        // 3. Jodi registration korar sathe sathei login korie dey ebong token dey:
        // const { accessToken, refreshToken, user } = response.data;
        // await setTokenInCookies("accessToken", accessToken);
        // await setTokenInCookies("refreshToken", refreshToken);

        // 4. Redirect to login page or verification page
        redirect("/login?registered=true");

    } catch (error: any) {
        if (error && typeof error === "object" && "digest" in error && error.digest.startsWith("NEXT_REDIRECT")) {
            throw error;
        }

        return {
            success: false,
            message: `Registration failed: ${error.message}`,
        };
    }
};