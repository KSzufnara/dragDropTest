import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDataComponent } from './destination-data.component';

describe('DestinationDataComponent', () => {
  let component: DestinationDataComponent;
  let fixture: ComponentFixture<DestinationDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationDataComponent]
    });
    fixture = TestBed.createComponent(DestinationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
