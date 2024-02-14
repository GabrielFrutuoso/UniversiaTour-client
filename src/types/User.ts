import { Activity } from "./Activity";

export type User = {
    id?: string;
    username: string;
    email: string;
    bio?: string;
    avatar?: string;
    birthday?: Date;
    tripInterests?: string;
    role: "USER" | "ADMIN";
    activities?: Activity[];
}