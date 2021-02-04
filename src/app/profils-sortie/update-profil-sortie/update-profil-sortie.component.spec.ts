import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilSortieComponent } from './update-profil-sortie.component';

describe('UpdateProfilSortieComponent', () => {
  let component: UpdateProfilSortieComponent;
  let fixture: ComponentFixture<UpdateProfilSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfilSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
