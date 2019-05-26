import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentJoinCourseComponent } from './student-join-course.component';

describe('StudentJoinCourseComponent', () => {
  let component: StudentJoinCourseComponent;
  let fixture: ComponentFixture<StudentJoinCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentJoinCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentJoinCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
