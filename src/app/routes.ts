import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfilsCibleComponent } from './profils-cible/profils-cible.component';
import { AdminComponent } from './admin/admin.component';


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
  {
    path: 'profils-cible', component: AdminComponent,
    children: [{ path: '', component: ProfilsCibleComponent }]
  },
  { path : '', redirectTo: '/login', pathMatch : 'full'}

];
