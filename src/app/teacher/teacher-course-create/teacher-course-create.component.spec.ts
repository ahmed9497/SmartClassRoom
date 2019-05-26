import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseCreateComponent } from './teacher-course-create.component';

describe('TeacherCourseCreateComponent', () => {
  let component: TeacherCourseCreateComponent;
  let fixture: ComponentFixture<TeacherCourseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
