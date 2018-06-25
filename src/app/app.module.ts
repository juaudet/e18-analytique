import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministrateurService } from './shared/administrateur.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfilFormComponent } from './user-profil-form/user-profil-form.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ProfilsCibleComponent } from './profils-cible/profils-cible.component';
import { ProfilCibleService } from './profil-cible.service';
import { AdminComponent } from './admin/admin.component';
import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    UserProfilFormComponent,
    ProfilsCibleComponent,
    AdminComponent,
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
