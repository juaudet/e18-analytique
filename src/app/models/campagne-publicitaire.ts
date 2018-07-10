import { Banniere } from './banniere';

export class CampagnePublicitaire {
    id: number;
    nom: string;
    budget: number;
    date_debut: string;
    date_fin: string;
    active: boolean;
    bannieres: Banniere[];
}
