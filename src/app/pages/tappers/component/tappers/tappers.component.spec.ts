import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TappersComponent } from './tappers.component';

describe('TappersComponent', () => {
  let component: TappersComponent;
  let fixture: ComponentFixture<TappersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TappersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TappersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
