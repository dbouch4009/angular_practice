import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasslerListComponentComponent } from './rassler-list-component.component';

describe('RasslerListComponentComponent', () => {
  let component: RasslerListComponentComponent;
  let fixture: ComponentFixture<RasslerListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasslerListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasslerListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
