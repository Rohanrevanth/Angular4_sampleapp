import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabpageComponent } from './grabpage.component';

describe('GrabpageComponent', () => {
  let component: GrabpageComponent;
  let fixture: ComponentFixture<GrabpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
