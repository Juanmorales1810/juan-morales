import { z } from "zod";

export type Inputs = {
    fullName: string;
    email: string;
    message: string;
};

export const formSchema = z
    .object({
        fullName: z.string().nonempty().min(3).max(30),
        email: z.string().email(),
        message: z.string().nonempty().min(10).max(500),
    })
