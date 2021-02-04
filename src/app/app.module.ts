import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListeProfilsComponent } from './profils/liste-profils/liste-profils.component';
import { AddProfilComponent } from './profils/add-profil/add-profil.component';
import { LoginComponent } from './login/login.component';
import { DetailProfilComponent } from './profils/detail-profil/detail-profil.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { DetailProfilSortieComponent } from './profils-sortie/detail-profil-sortie/detail-profil-sortie.component';
import { AddProfilSortieComponent } from './profils-sortie/add-profil-sortie/add-profil-sortie.component';
import { ListeProfilSortieComponent } from './profils-sortie/liste-profil-sortie/liste-profil-sortie.component';
import { HeaderComponent } from './header/header.component';
import { ListeUsersComponent } from './users/liste-users/liste-users.component';
import { UpdateProfilComponent } from './profils/update-profil/update-profil.component';
import { UpdateProfilSortieComponent } from './profils-sortie/update-profil-sortie/update-profil-sortie.component';
import { AddGroupeCompetenceComponent } from './competence/groupeCompetence/add-groupe-competence/add-groupe-competence.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import { ListeCompetenceComponent } from './competence/liste-competence/liste-competence.component';
import { ListeGroupeCompetenceComponent } from './competence/groupeCompetence/liste-groupe-competence/liste-groupe-competence.component';
import { ListeReferentielComponent } from './referentiel/liste-referentiel/liste-referentiel.component';
import { AddReferentielComponent } from './referentiel/add-referentiel/add-referentiel.component';
import { AddPromoComponent } from './promo/add-promo/add-promo.component';
import { ListePromoComponent } from './promo/liste-promo/liste-promo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataInterceptor } from './interceptor/data.interceptor';
import { OnComponent } from './competence/groupeCompetence/on/on.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateUserComponent,
    AddUserComponent,
    ListeProfilsComponent,
    ListeUsersComponent,
    AddProfilComponent,
    DetailProfilComponent,
    DetailUserComponent,
    DetailProfilSortieComponent,
    AddProfilSortieComponent,
    ListeProfilSortieComponent,
    HeaderComponent,
    UpdateProfilComponent,
    UpdateProfilSortieComponent,
    AddGroupeCompetenceComponent,
    AddCompetenceComponent,
    ListeCompetenceComponent,
    ListeGroupeCompetenceComponent,
    ListeReferentielComponent,
    AddReferentielComponent,
    AddPromoComponent,
    ListePromoComponent,
    OnComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
