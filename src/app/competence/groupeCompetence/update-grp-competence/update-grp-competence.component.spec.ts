import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGrpCompetenceComponent } from './update-grp-competence.component';

describe('UpdateGrpCompetenceComponent', () => {
  let component: UpdateGrpCompetenceComponent;
  let fixture: ComponentFixture<UpdateGrpCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGrpCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGrpCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
