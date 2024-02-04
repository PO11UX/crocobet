import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoPageComponent } from './casino-page.component';

describe('CasinoPageComponent', () => {
  let component: CasinoPageComponent;
  let fixture: ComponentFixture<CasinoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CasinoPageComponent]
    });
    fixture = TestBed.createComponent(CasinoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
