import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesAssessmentFormComponent } from './diabetes-assessment-form.component';

describe('DiabetesAssessmentFormComponent', () => {
  let component: DiabetesAssessmentFormComponent;
  let fixture: ComponentFixture<DiabetesAssessmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiabetesAssessmentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiabetesAssessmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
