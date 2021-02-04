import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfilSortieComponent } from './liste-profil-sortie.component';

describe('ListeProfilSortieComponent', () => {
  let component: ListeProfilSortieComponent;
  let fixture: ComponentFixture<ListeProfilSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProfilSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProfilSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
