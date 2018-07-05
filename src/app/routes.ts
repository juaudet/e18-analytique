import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfilsCibleComponent } from './components/profils-cible/profils-cible.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfilCibleCreerComponent } from './components/profil-cible-creer/profil-cible-creer.component';
import { ProfilCibleEditerComponent } from './components/profil-cible-editer/profil-cible-editer.component';
import { TableauBordPubComponent } from './components/tableau-bord-pub/tableau-bord-pub.component';
import { CampagnePubComponent } from './components/campagne-pub/campagne-pub.component';
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
               { path: 'campagnes/create', component: CampagnePubCreerComponent },
               { path: 'campagnes', component: CampagnePubComponent }
              ]},
  },
  { path : '', redirectTo: '/login', pathMatch : 'full'}

];
