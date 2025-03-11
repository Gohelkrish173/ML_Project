import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DiabiticPredictionServiceService } from '../diabitic-prediction-service.service';

@Component({
  selector: 'app-diabetes-assessment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './diabetes-assessment-form.component.html',
  styleUrl: './diabetes-assessment-form.component.css'
})
export class DiabetesAssessmentFormComponent {
  private _api=inject(DiabiticPredictionServiceService)

  
  diabetesForm:any = new FormGroup({
    Age: new FormControl(''),
    Pregnancies: new FormControl(''),
    BMI: new FormControl(''),
    Glucose: new FormControl(''),
    BloodPressure: new FormControl(''),
    HbA1c: new FormControl(''),
    LDL: new FormControl(''),
    HDL: new FormControl(''),
    Triglycerides: new FormControl(''),
    WaistCircumference: new FormControl(''),
    HipCircumference: new FormControl(''),
    WHR: new FormControl(''),
    DietType: new FormControl(''),
    FamilyHistory: new FormControl(''),
    Hypertension: new FormControl(''),
    MedicationUse: new FormControl('')
  });
  
  // data:any={
  //   "features":[this.diabetesForm.value.Age,this.diabetesForm.value.Pregnancies,this.diabetesForm.value.BMI,this.diabetesForm.value.Glucose,this.diabetesForm.value.BloodPressure,this.diabetesForm.value.HbA1c,this.diabetesForm.value.LDL,this.diabetesForm.value.HDL,this.diabetesForm.value.Triglycerides,this.diabetesForm.value.WaistCircumference,this.diabetesForm.value.HipCircumference,this.diabetesForm.value.WHR,this.diabetesForm.value.FamilyHistory,this.diabetesForm.value.DietType,this.diabetesForm.value.Hypertension,this.diabetesForm.value.MedicationUse]
  // }
  onSubmit() {
    let data={
      "features":[this.diabetesForm.value.Age,this.diabetesForm.value.Pregnancies,this.diabetesForm.value.BMI,this.diabetesForm.value.Glucose,this.diabetesForm.value.BloodPressure,this.diabetesForm.value.HbA1c,this.diabetesForm.value.LDL,this.diabetesForm.value.HDL,this.diabetesForm.value.Triglycerides,this.diabetesForm.value.WaistCircumference,this.diabetesForm.value.HipCircumference,this.diabetesForm.value.WHR,Number(this.diabetesForm.value.FamilyHistory),Number(this.diabetesForm.value.DietType),Number(this.diabetesForm.value.Hypertension),Number(this.diabetesForm.value.MedicationUse)]
    }

    console.log(data);
    

    
    this._api.predictDiabitic(data).subscribe((res:any)=>{
      if (res.prediction[0] == 1) {
        alert("Diabetic");
      } else {
        alert("Not Diabetic");
      }
    })
    console.log(this.diabetesForm.value)

  }
}
