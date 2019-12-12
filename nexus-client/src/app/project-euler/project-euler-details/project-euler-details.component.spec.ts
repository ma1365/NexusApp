import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEulerDetailsComponent } from './project-euler-details.component';

describe('ProjectEulerDetailsComponent', () => {
  let component: ProjectEulerDetailsComponent;
  let fixture: ComponentFixture<ProjectEulerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEulerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEulerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
