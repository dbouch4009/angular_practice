import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeffHardyComponentComponent } from './jeff-hardy-component.component';

describe('JeffHardyComponentComponent', () => {
  let component: JeffHardyComponentComponent;
  let fixture: ComponentFixture<JeffHardyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeffHardyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeffHardyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
