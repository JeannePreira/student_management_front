import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReferentielComponent } from './liste-referentiel.component';

describe('ListeReferentielComponent', () => {
  let component: ListeReferentielComponent;
  let fixture: ComponentFixture<ListeReferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReferentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeReferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
