import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReferentielComponent } from './update-referentiel.component';

describe('UpdateReferentielComponent', () => {
  let component: UpdateReferentielComponent;
  let fixture: ComponentFixture<UpdateReferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReferentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
