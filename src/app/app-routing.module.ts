import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StudentComponent} from './student/student.component';
import {StudentViewComponent} from './student/student-view/student-view.component';
import {WeatherComponent} from './weather/weather/weather.component';
import {TeacherComponent} from './teacher/teacher.component';
import {StudentProfileComponent} from './student/student-profile/student-profile.component';
import {StudentRegistrationComponent} from './student/student-registration/student-registration.component';
import {StudentLoginComponent} from './student/student-login/student-login.component';
import {TeacherLoginComponent} from './teacher/teacher-login/teacher-login.component';
import {TeacherRegistrationComponent} from './teacher/teacher-registration/teacher-registration.component';
import {TeacherProfileComponent} from './teacher/teacher-profile/teacher-profile.component';
import {StudentAttendanceComponent} from './student/student-attendance/student-attendance.component';
import {StudentQuizComponent} from './student/student-quiz/student-quiz.component';
import {StudentGradesComponent} from './student/student-grades/student-grades.component';
import {AppComponent} from './app.component';
import {TeacherCourseCreateComponent} from './teacher/teacher-course-create/teacher-course-create.component';
import {TeacherResultComponent} from './teacher/teacher-result/teacher-result.component';
import {TeacherAssignmentComponent} from './teacher/teacher-assignment/teacher-assignment.component';
import {TeacherQuizComponent} from './teacher/teacher-quiz/teacher-quiz.component';
import {TeacherAttendanceComponent} from './teacher/teacher-attendance/teacher-attendance.component';
import {StudentJoinCourseComponent} from './student/student-join-course/student-join-course.component';
import {StudentAssignmentComponent} from './student/student-assignment/student-assignment.component';
import {HomeComponent} from './home/home.component';
import {StudentProfileSettingComponent} from './student/student-profile-setting/student-profile-setting.component';
import {TeacherProfileSettingComponent} from './teacher/teacher-profile-setting/teacher-profile-setting.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LecDataComponent} from './teacher/lec-data/lec-data.component';
import {TeacherSubjectsComponent} from './teacher/teacher-subjects/teacher-subjects.component';
import {StudentEnrolledComponent} from './teacher/student-enrolled/student-enrolled.component';
import {StudentSubjectsComponent} from './student/student-subjects/student-subjects.component';

const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'student-login', component: StudentLoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'teacher-login', component: TeacherLoginComponent},
  {path: 'teacher-registration', component: TeacherRegistrationComponent},
  {path: 'teacher-profile', component: TeacherProfileComponent},
  {path: 'student-registration', component: StudentRegistrationComponent},
  {path: 'student', component: StudentComponent},
  {path: 'student-view', component: StudentViewComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'teacher-profile', children: [
      {path: 'teacher-assignment', component: TeacherAssignmentComponent},
      {path: 'teacher-quiz', component: TeacherQuizComponent},
      {path: 'teacher-attendance', component: TeacherAttendanceComponent},
      {path: 'teacher-course-create', component: TeacherCourseCreateComponent},
      {path: 'teacher-result', component: TeacherResultComponent},
      {path: 'teacher-profile-setting', component: TeacherProfileSettingComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'lec-data', component: LecDataComponent},
      {path: 'teacher-subjects', component: TeacherSubjectsComponent},
      {path: 'student-enrolled', component: StudentEnrolledComponent},
    ]},
  {path: 'student-profile', children: [
      {path: '', component: StudentProfileComponent},
      {path: 'student-attendance', component: StudentAttendanceComponent},
      {path: 'student-quiz', component: StudentQuizComponent},
      {path: 'student-grades', component: StudentGradesComponent},
      {path: 'student-join-course', component: StudentJoinCourseComponent},
      {path: 'student-assignment', component: StudentAssignmentComponent},
      {path: 'student-profile-setting', component: StudentProfileSettingComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'student-subjects', component: StudentSubjectsComponent}
    ]},
  {path: '', redirectTo:  'home' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
