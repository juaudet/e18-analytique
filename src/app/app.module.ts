import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
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
import { CampagnePubCreerComponent } from './components/campagne-pub-creer/campagne-pub-creer.component';
import { ChargementComponent } from './components/chargement/chargement.component';
import { TableauBordPubComponent } from './components/tableau-bord-pub/tableau-bord-pub.component';
import { ProfilCibleFormulaireComponent } from './components/profil-cible-formulaire/profil-cible-formulaire.component';
import { ProfilCibleEditerComponent } from './components/profil-cible-editer/profil-cible-editer.component';
import { AuthGuard } from './auth.guard';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CampagnePubFormulaireComponent } from './components/campagne-pub-formulaire/campagne-pub-formulaire.component';

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
    CampagnePubCreerComponent,
    ChargementComponent,
    TableauBordPubComponent,
    ProfilCibleFormulaireComponent,
    ProfilCibleEditerComponent,
    CampagnePubFormulaireComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [AdministrateurService, ProfilCibleService, httpInterceptorProviders, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
