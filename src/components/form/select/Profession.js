import React from 'react';
import style from '../../../App.module.css';

const options = [
    'Software Enginner',
    'Software Trainee',
    'Cloud Engineering',
    'Data Scientist'
]

const Profession = (props) => {

    const { profession , handleChange, styles , error , professionType } = props;

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

    if(type) {
        dropdownOptions = type.map((data) => <option value={data} key={data}>{data}</option>)
    }

    const handleBlurEvent = (e) => {
        const {value} = e.target;
        if(profession && type && value.length === 0) {
            console.log("error");
        }
    }

    return (
        <>
            <div className={styles}>
                <label>Designation</label>
                <select name='profession' value={profession} onChange={handleChange}>
                    <option value="">--Select Designation--</option>
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
                <div className={style['form-select']}>
                    <label>Select Profession Type</label>
                    <select 
                        name='professionType' 
                        value={professionType} 
                        onChange={handleChange}
                        onBlur = {handleBlurEvent}
                    >
                        <option value=''>-- Select Profession Type ---</option>
                        {dropdownOptions}
                    </select>
                </div>
            }

            
        </>
    )
}

export default Profession
