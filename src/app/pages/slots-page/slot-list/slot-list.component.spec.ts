import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsListComponent } from './slot-list.component';

describe('SlotsListComponent', () => {
  let component: SlotsListComponent;
  let fixture: ComponentFixture<SlotsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SlotsListComponent]
    });
    fixture = TestBed.createComponent(SlotsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
