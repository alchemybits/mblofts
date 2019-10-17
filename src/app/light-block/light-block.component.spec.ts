import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBlockComponent } from './light-block.component';

describe('LightBlockComponent', () => {
  let component: LightBlockComponent;
  let fixture: ComponentFixture<LightBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
