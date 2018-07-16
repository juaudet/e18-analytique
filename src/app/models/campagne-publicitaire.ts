import { Banniere } from './banniere';
import { ProfilCible} from './profil-cible';

export class CampagnePublicitaire {
    id: number;
    nom: string;
    budget: number;
    date_debut: string;
    date_fin: string;
    active: boolean;
    bannieres: Banniere[];
    profilsCible: ProfilCible[];
    url: string;
}
