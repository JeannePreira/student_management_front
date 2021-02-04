import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGroupeCompetenceComponent } from './liste-groupe-competence.component';

describe('ListeGroupeCompetenceComponent', () => {
  let component: ListeGroupeCompetenceComponent;
  let fixture: ComponentFixture<ListeGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
