import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileSettingComponent } from './teacher-profile-setting.component';

describe('TeacherProfileSettingComponent', () => {
  let component: TeacherProfileSettingComponent;
  let fixture: ComponentFixture<TeacherProfileSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherProfileSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
