import { SiteWebProfilCible } from './site-web-profil-cible';

export class ProfilCible {
	id: number;
    nom: string;
    sites_web_profil_cible: SiteWebProfilCible[];

    public constructor() {
      this.nom = '';
      this.sites_web_profil_cible = [];
    }

}
