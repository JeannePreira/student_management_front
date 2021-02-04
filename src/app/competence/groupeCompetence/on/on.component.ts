import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on',
  templateUrl: './on.component.html',
  styleUrls: ['./on.component.css']
})
export class OnComponent implements OnInit {

  @Input() propFils: any;
  // @Input() propFil: any;
  groupeCompetences: any;
  constructor() { }

  ngOnInit(): void {
  }

}
