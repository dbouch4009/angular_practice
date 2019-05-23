import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeTesterComponent } from './attribute-tester.component';

describe('AttributeTesterComponent', () => {
  let component: AttributeTesterComponent;
  let fixture: ComponentFixture<AttributeTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
