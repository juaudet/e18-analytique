import { Banniere } from './banniere';

export class CampagnePublicitaire {
    nom: string;
    budget: number;
    date_debut: string;
    date_fin: string;
    active: boolean;
    bannieres: Banniere[];
}
