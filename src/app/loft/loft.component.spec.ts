import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoftComponent } from './loft.component';

describe('LoftComponent', () => {
  let component: LoftComponent;
  let fixture: ComponentFixture<LoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
