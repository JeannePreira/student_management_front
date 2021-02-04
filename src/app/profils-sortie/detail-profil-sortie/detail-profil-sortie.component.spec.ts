import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfilSortieComponent } from './detail-profil-sortie.component';

describe('DetailProfilSortieComponent', () => {
  let component: DetailProfilSortieComponent;
  let fixture: ComponentFixture<DetailProfilSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProfilSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfilSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
