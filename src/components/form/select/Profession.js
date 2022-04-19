import React, { useEffect } from 'react';
import classes from '../../../App.module.css';

const options = [
    'Software Enginner',
    'Software Trainee',
    'Cloud Engineering',
    'Data Scientist'
]

const Profession = (props) => {

    const { profession , handleChange, styles , error , subProfession , setInputs , subProfessionError} = props;

    let type = null;
    let dropdownOptions = null;
    const softwareEngineer = ['Frontend Developer' , 'Backend Developer' , 'UI/UX Designer' , 'Testing Engineer'];
    const softwareTrainee = ['React JS Trainee' , 'Node JS Trainee' , 'Go Lang Trainee' , 'Javascript Trainee'];
    

    if(profession === 'Software Enginner') {
        type = softwareEngineer ;
    }

    if(profession === 'Software Trainee') {
        type = softwareTrainee
    }

    useEffect(()=>{
        if(profession === 'Cloud Engineering' || profession === 'Data Scientist') {
            setInputs((prevInputs) => {
                return {
                    ...prevInputs,
                    subProfession : ''
                }
            })
        }
    },[profession , setInputs])

    

    if(type) {
        dropdownOptions = type.map((data) => <option value={data} key={data}>{data}</option>)
    }

    const handleBlurEvent = (e) => {
        const {value} = e.target;
        if(profession && type && value.length === 0) {
            console.log("error");
        }
    }

    const subProfessionClasses = `${classes["form-select"]} ${
        subProfessionError ? classes["invalid"] : ""
      }`;

    return (
        <>
            <div className={styles}>
                <label>Profession</label>
                <select name='profession' value={profession} onChange={handleChange}>
                    <option value="">--Select Profession--</option>
                    {
                        options.map(data => {
                            return <option value={data} key={data}>{data}</option>
                        })
                    }
                </select>
                {error && <small>{error}</small>}
            </div>
            {
                type &&
                <div className={subProfessionClasses}>
                    <label>Select Subprofession </label>
                    <select 
                        name='subProfession' 
                        value={subProfession} 
                        onChange={handleChange}
                        onBlur = {handleBlurEvent}
                    >
                        <option value=''>-- Select sub-profession ---</option>
                        {dropdownOptions}
                    </select>
                    {subProfessionError && <small>{subProfessionError}</small> }
                </div>
            }

            
        </>
    )
}

export default Profession
