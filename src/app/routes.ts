import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfilsCibleComponent } from './components/profils-cible/profils-cible.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserProfilFormComponent } from './components/user-profil-form/user-profil-form.component';


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
  { path: 'admin', component: AdminComponent },
  {
    path: 'profils-cible', component: AdminComponent,
    children: [{ path: '', component: ProfilsCibleComponent }]
  },
  {
    path: 'profils-cible/create', component: AdminComponent,
    children: [{ path: '', component: UserProfilFormComponent }]
  },
  { path : '', redirectTo: '/login', pathMatch : 'full'}

];
