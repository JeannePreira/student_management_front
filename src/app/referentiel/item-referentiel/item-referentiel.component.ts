import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-referentiel',
  templateUrl: './item-referentiel.component.html',
  styleUrls: ['./item-referentiel.component.css']
})
export class ItemReferentielComponent implements OnInit {

  @Input() dataFils: any;
  constructor() { }

  ngOnInit(): void {
  }

}
