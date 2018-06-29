import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfilsCibleComponent } from './components/profils-cible/profils-cible.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfilCibleCreerComponent } from './components/profil-cible-creer/profil-cible-creer.component';
import { TableauBordPubComponent } from './components/tableau-bord-pub/tableau-bord-pub.component';
import { CampagnePubComponent } from './components/campagne-pub/campagne-pub.component';


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
    children: [{ path: 'tableau-bord-pub', component: TableauBordPubComponent },
               { path: 'profils-cible', component: ProfilsCibleComponent },
               { path: 'campagnes', component: CampagnePubComponent }]},
  {
    path: 'profils-cible/create', component: AdminComponent,
    children: [{ path: '', component: ProfilCibleCreerComponent }]
  },
  { path : '', redirectTo: '/login', pathMatch : 'full'}

];
