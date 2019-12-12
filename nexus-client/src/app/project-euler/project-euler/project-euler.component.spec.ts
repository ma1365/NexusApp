import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEulerComponent } from './project-euler.component';

describe('ProjectEulerComponent', () => {
  let component: ProjectEulerComponent;
  let fixture: ComponentFixture<ProjectEulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
