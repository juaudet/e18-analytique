import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministrateurService } from './services/shared/administrateur.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfilCibleCreerComponent } from './components/profil-cible-creer/profil-cible-creer.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ProfilsCibleComponent } from './components/profils-cible/profils-cible.component';
import { ProfilCibleService } from './services/profil-cible.service';
import { AdminComponent } from './components/admin/admin.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { CampagnePubComponent } from './components/campagne-pub/campagne-pub.component';
import { ChargementComponent } from './components/chargement/chargement.component';
import { TableauBordPubComponent } from './components/tableau-bord-pub/tableau-bord-pub.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ProfilCibleCreerComponent,
    ProfilsCibleComponent,
    AdminComponent,
    CampagnePubComponent,
    ChargementComponent,
    TableauBordPubComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdministrateurService, ProfilCibleService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
