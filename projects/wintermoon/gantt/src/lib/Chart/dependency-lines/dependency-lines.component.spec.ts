import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyLinesComponent } from './dependency-lines.component';

describe('DependencyLinesComponent', () => {
  let component: DependencyLinesComponent;
  let fixture: ComponentFixture<DependencyLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
