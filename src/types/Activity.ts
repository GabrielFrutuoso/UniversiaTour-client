import { Touristic } from "./Touristic";

export type Activity = {
    id?: number;
    location: string;
    city: string;
    localMaps: string;
    description: string;
    destiniesId: number;
    userId: string;
    touristic?: Touristic;
}