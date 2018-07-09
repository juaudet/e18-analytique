import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfilsCibleComponent } from './components/publicite/profils-cible/profils-cible.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfilCibleCreerComponent } from './components/publicite/profil-cible-creer/profil-cible-creer.component';
import { ProfilCibleEditerComponent } from './components/publicite/profil-cible-editer/profil-cible-editer.component';
import { TableauBordPubComponent } from './components/publicite/tableau-bord-pub/tableau-bord-pub.component';
import { CampagnePubComponent } from './components/publicite/campagne-pub/campagne-pub.component';
import { CampagnePubCreerComponent } from './components/publicite/campagne-pub-creer/campagne-pub-creer.component';
import { CampagnePubFormulaireComponent} from './components/publicite/campagne-pub-formulaire/campagne-pub-formulaire.component';
import { TableauBordSiteComponent} from './components/siteWeb/tableau-bord-site/tableau-bord-site.component';
import { InstructionsComponent} from './components/siteWeb/instructions/instructions.component';
import { StatistiquesComponent} from './components/siteWeb/statistiques/statistiques.component';
import { RedevancesComponent} from './components/siteWeb/redevances/redevances.component';
import { GenerateurCodeComponent} from './components/siteWeb/generateur-code/generateur-code.component';
import { AuthGuard } from './auth.guard';



export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'signup', component: HomeComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: HomeComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path: 'admin', component: AdminComponent,
  canActivate: [AuthGuard],
    children: [{ path: 'tableau-bord-pub', component: TableauBordPubComponent },
               { path: 'profils-cible/create', component: ProfilCibleCreerComponent},
               { path: 'profils-cible/:id', component: ProfilCibleEditerComponent},
               { path: 'profils-cible', component: ProfilsCibleComponent },
               { path: 'campagnes', component: CampagnePubComponent },
               { path: 'campagnes/create', component: CampagnePubCreerComponent },
               { path: 'campagnes/:id', component: CampagnePubFormulaireComponent },
               { path: 'tableau-bord-site', component: TableauBordSiteComponent },
               { path: 'instructions', component: InstructionsComponent },
               { path: 'statistiques', component: StatistiquesComponent },
               { path: 'redevances', component: RedevancesComponent },
               { path: 'generateur-code', component: GenerateurCodeComponent }
              ]
  },
  { path : '', redirectTo: '/login', pathMatch : 'full'}

];
