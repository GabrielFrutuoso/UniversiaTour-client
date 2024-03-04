import { Touristic } from "./Touristic";

export type Activity = {
    id?: number;
    location: string;
    city: string;
    local_maps: string;
    description: string;
    destinies_id: number;
    user_id: string;
    touristic?: Touristic;
}