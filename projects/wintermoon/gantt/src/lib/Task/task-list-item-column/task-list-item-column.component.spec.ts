import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListItemColumnComponent } from './task-list-item-column.component';

describe('TaskListItemColumnComponent', () => {
  let component: TaskListItemColumnComponent;
  let fixture: ComponentFixture<TaskListItemColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListItemColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
