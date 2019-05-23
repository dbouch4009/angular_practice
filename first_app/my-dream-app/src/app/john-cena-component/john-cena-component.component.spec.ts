import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnCenaComponentComponent } from './john-cena-component.component';

describe('JohnCenaComponentComponent', () => {
  let component: JohnCenaComponentComponent;
  let fixture: ComponentFixture<JohnCenaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnCenaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnCenaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
