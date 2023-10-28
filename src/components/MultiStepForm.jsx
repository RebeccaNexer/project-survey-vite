import { useState } from 'react';
import { NameForm } from './NameForm';
import { Season } from './Season';
import { Summary } from './Summary';
import { Gender } from './Gender';

export const MultiStepForm = () => {
    const [formData, SetFormData] = useState({
        name: "",
        season: "",
        gender: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const [currentStep, setCurrentStep ] = useState(1);

    const updateFormData = (field, value) => {
        SetFormData((values) => ({...values, [field]: value}));
    };

    const nextStep = () => {
        if (currentStep < 3 ) setCurrentStep(currentStep + 1)
    }

    const prevStep = () => {
        if (currentStep > 1 ) setCurrentStep(currentStep - 1)
    }

    const submit = () => {
    setSubmitted(true);
    }
    return (
    <div className='form'>
        {!submitted && <div>
         {currentStep === 1 && (
         <NameForm value={formData.name} updateFormData={updateFormData}/>)}
         {currentStep === 2 && (
         <Season value={formData.season} updateFormData={updateFormData}/>)}
         {currentStep === 3 && (
         <Gender value={formData.gender} updateFormData={updateFormData}/>)}

         <div>
             {currentStep > 1 && <button className='button' onClick={prevStep}>Back</button>}
             {currentStep < 3 ? <button className='button' onClick={nextStep}>Next</button> : <button className='button submit' onClick={submit}>Submit</button>}
         </div>
         </div>
        }
        {submitted && <Summary name={formData.name} season={formData.season} gender={formData.gender} />}
    </div>
    );
  };