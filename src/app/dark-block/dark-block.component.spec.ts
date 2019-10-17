import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBlockComponent } from './dark-block.component';

describe('DarkBlockComponent', () => {
  let component: DarkBlockComponent;
  let fixture: ComponentFixture<DarkBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
