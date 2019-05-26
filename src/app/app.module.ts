import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {AngularmaterialModule} from './angularmaterial.module';












import {NgxQRCodeModule} from 'ngx-qrcode2';

// import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import {HttpClientModule} from '@angular/common/http';
import { WeatherComponent } from './weather/weather/weather.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { StudentRegistrationComponent } from './student/student-registration/student-registration.component';
import { TeacherRegistrationComponent } from './teacher/teacher-registration/teacher-registration.component';
import {StudentAttendanceComponent} from './student/student-attendance/student-attendance.component';
import {StudentQuizComponent} from './student/student-quiz/student-quiz.component';
import { TeacherAssignmentComponent } from './teacher/teacher-assignment/teacher-assignment.component';
import { StudentGradesComponent } from './student/student-grades/student-grades.component';
import { TeacherCourseCreateComponent } from './teacher/teacher-course-create/teacher-course-create.component';
import { TeacherResultComponent } from './teacher/teacher-result/teacher-result.component';
import { TeacherAttendanceComponent } from './teacher/teacher-attendance/teacher-attendance.component';
import { TeacherQuizComponent } from './teacher/teacher-quiz/teacher-quiz.component';
import { StudentJoinCourseComponent } from './student/student-join-course/student-join-course.component';
import { StudentAssignmentComponent } from './student/student-assignment/student-assignment.component';
import {from} from 'rxjs';
import { HomeComponent } from './home/home.component';
import { StudentProfileSettingComponent } from './student/student-profile-setting/student-profile-setting.component';
import { TeacherProfileSettingComponent } from './teacher/teacher-profile-setting/teacher-profile-setting.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LecDataComponent } from './teacher/lec-data/lec-data.component';
import { TeacherSubjectsComponent } from './teacher/teacher-subjects/teacher-subjects.component';
import { StudentEnrolledComponent } from './teacher/student-enrolled/student-enrolled.component';
import { StudentSubjectsComponent } from './student/student-subjects/student-subjects.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentViewComponent,
    TeacherComponent,
    WeatherComponent,
    StudentProfileComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    TeacherProfileComponent,
    StudentRegistrationComponent,
    TeacherRegistrationComponent,
    StudentAttendanceComponent,
    StudentQuizComponent,
    TeacherAssignmentComponent,
    StudentGradesComponent,
    TeacherCourseCreateComponent,
    TeacherResultComponent,
    TeacherAttendanceComponent,
    TeacherQuizComponent,
    StudentJoinCourseComponent,
    StudentAssignmentComponent,
    HomeComponent,
    StudentProfileSettingComponent,
    TeacherProfileSettingComponent,
    AboutUsComponent,
    LecDataComponent,
    TeacherSubjectsComponent,
    StudentEnrolledComponent,
    StudentSubjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule 
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
