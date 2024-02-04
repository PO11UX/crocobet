import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsPageComponent } from './slots-page.component';

describe('SlotsPageComponent', () => {
  let component: SlotsPageComponent;
  let fixture: ComponentFixture<SlotsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SlotsPageComponent]
    });
    fixture = TestBed.createComponent(SlotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
