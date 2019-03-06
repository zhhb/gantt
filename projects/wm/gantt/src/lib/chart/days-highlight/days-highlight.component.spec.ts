import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysHighlightComponent } from './days-highlight.component';

describe('DaysHighlightComponent', () => {
  let component: DaysHighlightComponent;
  let fixture: ComponentFixture<DaysHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
