import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CompetenceService } from '../service/competence.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-competence',
  templateUrl: './liste-competence.component.html',
  styleUrls: ['./liste-competence.component.css']
})
export class ListeCompetenceComponent implements OnInit {

  competences: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings | any;
  libellen1 = '';
  libellen2 = '';
  libellen3 = '';
  groupeAction1='';
  groupeAction2='';
  groupeAction3='';
  critereEvaluation1 = '';
  critereEvaluation2 = '';
  critereEvaluation3 = '';
  description = '';
  idEdit: number = 0;
  id: number = 0;

  constructor(private _competenceService: CompetenceService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this._competenceService.getRefresh().subscribe(() =>{
      this.getCompetence();
    });
    this.getCompetence();

    
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'libelle',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }

  getCompetence(){
    this._competenceService.getCompetence().subscribe(
      (data: any) =>
      {
        this.dropdownList = data; 
       console.log(data)
      }
    )
  }
    onItemSelect(item: any) {
          this.idEdit = item.id;
          this._competenceService.getCompetenceById(item.id).subscribe(
            (data)=>{
              this.competences = data;
              this.libellen1 = data.niveaux[0].libelle;
              this.groupeAction1 = data.niveaux[0].groupeAction;
              this.critereEvaluation1 = data.niveaux[0].critereEvaluation;
              this.libellen2 = data.niveaux[1].libelle;
              this.groupeAction2 = data.niveaux[1].groupeAction;
              this.critereEvaluation2 = data.niveaux[1].critereEvaluation;
              this.libellen3 = data.niveaux[2].libelle;
              this.groupeAction3 = data.niveaux[2].groupeAction;
              this.critereEvaluation3 = data.niveaux[2].critereEvaluation;
              this.description = data.description;
              console.log(data.niveaux);
              
              console.log(data)
            })
            // console.log(this.idEdit)
  
    } 
  
    supprimerCompetence(id:number){
      console.log(id)
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
        this._competenceService.deleteCompetence(id).subscribe( data => {
          alert("data")
            console.log(data)
            // console.log(data)
          })
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    }
    
  }

 

