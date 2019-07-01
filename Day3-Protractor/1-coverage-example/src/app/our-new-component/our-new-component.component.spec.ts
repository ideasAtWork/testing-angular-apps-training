import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewComponentComponent } from './our-new-component.component';

describe('OurNewComponentComponent', () => {
  let component: OurNewComponentComponent;
  let fixture: ComponentFixture<OurNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
