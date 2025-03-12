import React,{useEffect,useState} from 'react';
import './Input_Form.css';

const Input_Form = () => {
  const [feature,setFeature] = useState({Age : 1,Pregnancies : 0,BMI : 0,Glucose : 0,BloodPressure : 0,HbA1c : 0,LDL : 0,HDL : 0,Triglycerides : 0,WaistCircumference : 0,HipCircumference : 0,WHR : 0,FamilyHistory : 0,DietType : 0,Hypertension : 0,MedicationUse : 0})
  const [main,setMain] = useState({features : []});

  useEffect(()=>{
    setMain({features : Object.values(feature)});
  },[feature]);
  
  return (
    <>
    <div class="container form-container bg-white p-6 rounded-xl shadow-lg border border-gray-200 mt-5">
        <h2 class="text-3xl font-bold text-center mt-4 mb-5 text-blue-600">Diabetes Assessment Form</h2>
        <form>
            <div class="row g-2">
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Age</label>
                    <input type="number" class="form-control" min="1" onChange={(e)=>{
                        setFeature({...feature,Age : Number(e.target.value)});
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Pregnancies</label>
                    <input type="number" class="form-control" min="0" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,Pregnancies : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">BMI</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,BMI : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Glucose</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,Glucose : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Blood Pressure</label>
                    <input type="number" class="form-control" min="1" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,BloodPressure : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">HbA1c</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,HbA1c : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">LDL</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,LDL : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">HDL</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,HDL : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Triglycerides</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,Triglycerides : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Waist Circumference</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,WaistCircumference : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">Hip Circumference</label>
                    <input type="number" step="0.1" class="form-control" min="1" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,HipCircumference : Number(e.target.value)});
                    }} required />
                </div>
                <div class="col-md-3">
                    <label class="form-label font-semibold text-gray-700">WHR</label>
                    <input type="number" step="0.1" class="form-control" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,WHR : Number(e.target.value)});
                    }} min="1" required />
                </div>
            </div>
            
            <div class="col-md-3 mt-2">
                    <label class="form-label font-semibold text-gray-700">Diet Type</label>
                    <select class="form-select" onChange={(e)=>{
                        setFeature({...feature,DietType : Number(e.target.value)});
                        // setDietType(e.target.value);
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
                        // setMain((main)=>({...main,features : [...main.features, e.target.value,DietType]}));
                        setFeature({...feature,FamilyHistory : Number(e.target.value)});
                        console.log(main);
                    }} name="familyHistory" value="1" required />
                        <label class="form-check-label text-green-600">Yes</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value,DietType]}));
                        setFeature({...feature,FamilyHistory : Number(e.target.value)});
                    }} name="familyHistory" value="0" required />
                        <label class="form-check-label text-red-600">No</label>
                    </div>
                </div>

                <div class="col-md-4 radio-group">
                    <label class="text-gray-700">Hypertension:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,Hypertension : Number(e.target.value)});
                    }} name="hypertension" value="1" required />
                        <label class="form-check-label text-green-600">Yes</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,Hypertension : Number(e.target.value)});
                    }} name="hypertension" value="0" required />
                        <label class="form-check-label text-red-600">No</label>
                    </div>
                </div>
                
                <div class="col-md-4 radio-group">
                    <label class="text-gray-700">Medication Use:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,MedicationUse : Number(e.target.value)});
                    }} name="medicationUse" value="1" required />
                        <label class="form-check-label text-green-600">Yes</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={(e)=>{
                        // setMain((main)=>({...main,features : [...main.features, e.target.value]}));
                        setFeature({...feature,MedicationUse : Number(e.target.value)});
                        console.log(feature);
                    }} name="medicationUse" value="0" required />
                        <label class="form-check-label text-red-600">No</label>
                    </div>
                </div>

            </div>
            
            <div class="text-center mt-4 mb-4">
                <button class="btn btn-primary px-4 py-2 rounded-lg" onClick={(e)=>{
                    e.preventDefault()
                        fetch("http://127.0.0.1:5000/predict",{
                            method : "POST",
                            headers : {'Content-Type' : 'application/json'},
                            body : JSON.stringify(main)
                        }).then((res)=>{
                            return res.json();
                        }).then((res)=>{
                            console.log(res.prediction);
                            alert(`Prediction : ${res.prediction[0] == 1 ? 'Diabetic' : 'Non-Diabetic'}`);
                        });
                        console.log(main);
                }}>Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Input_Form