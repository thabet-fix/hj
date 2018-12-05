import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenumerationComponent } from './renumeration.component';

describe('RenumerationComponent', () => {
  let component: RenumerationComponent;
  let fixture: ComponentFixture<RenumerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenumerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenumerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
