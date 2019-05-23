import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasslerComponent } from './rassler.component';

describe('RasslerComponent', () => {
  let component: RasslerComponent;
  let fixture: ComponentFixture<RasslerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasslerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasslerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
