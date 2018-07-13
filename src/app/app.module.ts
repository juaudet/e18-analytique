import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdministrateurService } from './services/shared/administrateur.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfilCibleCreerComponent } from './components/publicite/profil-cible-creer/profil-cible-creer.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ProfilsCibleComponent } from './components/publicite/profils-cible/profils-cible.component';
import { ProfilCibleService } from './services/profil-cible.service';
import { AdminComponent } from './components/admin/admin.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { CampagnePubComponent } from './components/publicite/campagne-pub/campagne-pub.component';
import { CampagnePubCreerComponent } from './components/publicite/campagne-pub-creer/campagne-pub-creer.component';
import { ChargementComponent } from './components/chargement/chargement.component';
import { TableauBordPubComponent } from './components/publicite/tableau-bord-pub/tableau-bord-pub.component';
import { ProfilCibleFormulaireComponent } from './components/publicite/profil-cible-formulaire/profil-cible-formulaire.component';
import { ProfilCibleEditerComponent } from './components/publicite/profil-cible-editer/profil-cible-editer.component';
import { AuthGuard } from './auth.guard';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CampagnePubFormulaireComponent } from './components/publicite/campagne-pub-formulaire/campagne-pub-formulaire.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InstructionsComponent } from './components/siteWeb/instructions/instructions.component';
import { StatistiquesComponent } from './components/siteWeb/statistiques/statistiques.component';
import { RedevancesComponent } from './components/siteWeb/redevances/redevances.component';
import { GenerateurCodeComponent } from './components/siteWeb/generateur-code/generateur-code.component';
import { TableauBordSiteComponent } from './components/siteWeb/tableau-bord-site/tableau-bord-site.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TableauBordSiteRowComponent } from './components/siteWeb/tableau-bord-site-row/tableau-bord-site-row.component';

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
    InstructionsComponent,
    StatistiquesComponent,
    RedevancesComponent,
    GenerateurCodeComponent,
    TableauBordSiteComponent,
    TableauBordSiteRowComponent,
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
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [AdministrateurService, ProfilCibleService, httpInterceptorProviders, AuthGuard, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
