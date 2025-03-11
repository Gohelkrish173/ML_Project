import React,{useEffect,useState} from 'react';
import './Input_Form.css';

const Input_Form = () => {
  const [features,setFeatures] = useState({});
  const [main,setMain] = useState({});
  
  return (
    <>
    <div class="container form-container bg-white p-6 rounded-xl shadow-lg border border-gray-200 mt-5">
        <h2 class="text-3xl font-bold text-center mt-4 mb-5 text-blue-600">Diabetes Assessment Form</h2>
        <form>
            <div class="row g-2">
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Age</label>
                    <input type="number" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'Age' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Pregnancies</label>
                    <input type="number" class="form-control" min="0" onChange={(e)=>{
                        setFeatures({...features,'Pregnancies' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">BMI</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'BMI' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Glucose</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'Glucose' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Blood Pressure</label>
                    <input type="number" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'BloodPressure' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">HbA1c</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'HbA1c' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">LDL</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'LDL' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">HDL</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'HDL' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Triglycerides</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'Triglycerides' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Waist Circumference</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'WaistCircumference' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Hip Circumference</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        setFeatures({...features,'HipCircumference' : e.target.value})
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">WHR</label>
                    <input type="number" step="0.1" class="form-control" onChange={(e)=>{
                        setFeatures({...features,'WHR' : e.target.value})
                    }} min="1" required />
                </div>
            </div>
            
            <div class="col-md-3 mt-2">
                    <label class="form-label font-semibold text-gray-700">Diet Type</label>
                    <select class="form-select" onChange={(e)=>{
                        setFeatures({...features,'DietType' : e.target.value})
                    }} required>
                        <option value="0">Unbalanced</option>
                        <option value="1">Balanced</option>
                        <option value="2">Vegan/Vegetarian</option>
                    </select>
                </div>
            
            <div class="row g-1 mt-1">
                <div class="col-md-4 radio-group">
                    <label class="text-gray-700">Family History:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        setFeatures({...features,'FamilyHistory' : e.target.value})
                    }} name="familyHistory" value="1" required />
                        <label class="form-check-label text-green-600">Yes</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        setFeatures({...features,'FamilyHistory' : e.target.value})
                    }} name="familyHistory" value="0" required />
                        <label class="form-check-label text-red-600">No</label>
                    </div>
                </div>

                <div class="col-md-4 radio-group">
                    <label class="text-gray-700">Hypertension:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        setFeatures({...features,'Hypertension' : e.target.value})
                    }} name="hypertension" value="1" required />
                        <label class="form-check-label text-green-600">Yes</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        setFeatures({...features,'Hypertension' : e.target.value})
                    }} name="hypertension" value="0" required />
                        <label class="form-check-label text-red-600">No</label>
                    </div>
                </div>
                
                <div class="col-md-4 radio-group">
                    <label class="text-gray-700">Medication Use:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        setFeatures({...features,'MedicationUse' : e.target.value})
                    }} name="medicationUse" value="1" required />
                        <label class="form-check-label text-green-600">Yes</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        setFeatures({...features,'MedicationUse' : e.target.value})
                        console.log(features);
                    }} name="medicationUse" value="0" required />
                        <label class="form-check-label text-red-600">No</label>
                    </div>
                </div>

            </div>
            
            <div class="text-center mt-4 mb-4">
                <button class="btn btn-primary px-4 py-2 rounded-lg" onClick={(e)=>{
                                            setMain({'features' : [features.Age,features.Pregnancies,features.BMI,features.Glucose,features.BloodPressure,features.HbA1c,features.LDL,features.HDL,features.Triglycerides,features.WaistCircumference,features.HipCircumference,features.WHR,features.FamilyHistory,features.DietType,features.Hypertension,features.MedicationUse]});
                        console.log(main);
                }}>Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Input_Form