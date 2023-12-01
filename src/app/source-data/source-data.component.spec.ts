import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDataComponent } from './source-data.component';

describe('SourceDataComponent', () => {
  let component: SourceDataComponent;
  let fixture: ComponentFixture<SourceDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceDataComponent]
    });
    fixture = TestBed.createComponent(SourceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
