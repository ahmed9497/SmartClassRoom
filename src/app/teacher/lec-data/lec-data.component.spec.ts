import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecDataComponent } from './lec-data.component';

describe('LecDataComponent', () => {
  let component: LecDataComponent;
  let fixture: ComponentFixture<LecDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
