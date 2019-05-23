import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTesterComponent } from './template-tester.component';

describe('TemplateTesterComponent', () => {
  let component: TemplateTesterComponent;
  let fixture: ComponentFixture<TemplateTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
