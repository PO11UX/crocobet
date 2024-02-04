import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderFiltersComponent } from './provider-filters.component';

describe('ProviderFiltersComponent', () => {
  let component: ProviderFiltersComponent;
  let fixture: ComponentFixture<ProviderFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProviderFiltersComponent]
    });
    fixture = TestBed.createComponent(ProviderFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
