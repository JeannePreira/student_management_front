import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ListeProfilsComponent } from './profils/liste-profils/liste-profils.component';
import { ListeUsersComponent } from './users/liste-users/liste-users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddProfilComponent } from './profils/add-profil/add-profil.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { AddProfilSortieComponent } from './profils-sortie/add-profil-sortie/add-profil-sortie.component';
import { UpdateProfilComponent } from './profils/update-profil/update-profil.component';
import { UpdateProfilSortieComponent } from './profils-sortie/update-profil-sortie/update-profil-sortie.component';
import { ListeProfilSortieComponent } from './profils-sortie/liste-profil-sortie/liste-profil-sortie.component';
import { AddGroupeCompetenceComponent } from './competence/groupeCompetence/add-groupe-competence/add-groupe-competence.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import {ListeCompetenceComponent } from './competence/liste-competence/liste-competence.component';
import { ListeGroupeCompetenceComponent } from './competence/groupeCompetence/liste-groupe-competence/liste-groupe-competence.component';
import { ListeReferentielComponent } from './referentiel/liste-referentiel/liste-referentiel.component';
import { AddReferentielComponent } from './referentiel/add-referentiel/add-referentiel.component';





const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: ListeUsersComponent},
  {path: 'admin', component: HeaderComponent, children:[
    {path: 'users', component:ListeUsersComponent, children:[
      {path: 'updateUser/:id', component: UpdateUserComponent},
      {path: 'addUser', component: AddUserComponent},
    ]},
    {path: 'profils', component: ListeProfilsComponent, children:[
      {path: 'addProfil', component:AddProfilComponent},
      {path: 'updateProfil/:id', component:UpdateProfilComponent}
    ]},
    {path: 'profilsSorties', component: ListeProfilSortieComponent, children:[
      {path: 'addProfilSortie', component: AddProfilSortieComponent},
      {path: 'updateProfilSortie/:id', component: UpdateProfilSortieComponent}
    ]},
    {path: 'groupeCompetence', component: ListeGroupeCompetenceComponent, children:[
      {path: 'addgroupeCompetence', component: AddGroupeCompetenceComponent},
    ]},
    {path: 'CompetenceListe', component: ListeCompetenceComponent, children:[
      {path: 'addCompetence', component: AddCompetenceComponent},
    ]},
    {path: 'Referentiel', component: ListeReferentielComponent, children:[
      {path: 'addReferentiel', component: AddReferentielComponent},
    ]}
  ] }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { 

}
