import React, { useState } from 'react';
import {validateFormFields} from '../../helpers/utils';
import styles from '../../App.module.css';
import Gender from './radio/Gender';
import Input from './input/Input';
import Profession from './select/Profession';
import Skills from './checkbox/Skills';
import Hobbies from './select/Hobbies';

const initialInputState = {
    name : '',
    email : '',
    username : '',
    phone : '',
    gender : '',
    profession : '',
    password : '',
    confirmPassword : '',
}

const initialErrorState = {
    nameError : '',
    emailError : '',
    usernameError : '',
    phoneError : '',
    genderError : '',
    professionError : '',
    skillsError :'',
    hobbiesError : '',
    passwordError : '',
    confirmPasswordError : ''
}



const Form = () => {

    const [inputs , setInputs] = useState(initialInputState)
    const [skillsState , setSkillsState] = useState([]);
    const [hobbies , setHobbies] = useState([]);


    const [inputsError ,setInputsError] = useState(initialErrorState)

    const handleChange = (e) => {
        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleSkillsChange = (e) => {
        const { value , checked } = e.target;

        if(checked) {
            setSkillsState([...skillsState , value])
        } else {
            const updatedSkillState = skillsState.filter((e) => e !== value);
            setSkillsState(updatedSkillState);
        }

    }

    const handleHobbiesChange = (value) => {
        setHobbies([...value]);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const {isInvalid , ...error} = validateFormFields({...inputs,skillsState,hobbies})
        if(isInvalid) {
            setInputsError((prevInputsError) => {
                return {
                    ...prevInputsError,
                    ...error
                }
            })

            return ;
        }
        console.log({...inputs,skillsState,hobbies})
        alert("Form Submitted Successfully")
        setInputsError(initialErrorState)
        setInputs(initialInputState)
        setSkillsState([])
    }

    const nameClasses = `${styles['form-control']} ${inputsError.nameError ? styles['invalid'] : ''}`;
    const emailClasses = `${styles['form-control']} ${inputsError.emailError ? styles['invalid'] : ''}`;
    const usernameClasses = `${styles['form-control']} ${inputsError.usernameError ? styles['invalid'] : ''}`;
    const phoneClasses = `${styles['form-control']} ${inputsError.phoneError ? styles['invalid'] : ''}`;
    const passwordClasses = `${styles['form-control']} ${inputsError.passwordError ? styles['invalid'] : ''}`;
    const confirmPasswordClasses = `${styles['form-control']} ${inputsError.confirmPasswordError ? styles['invalid'] : ''}`;
    const genderClasses = `${styles['form-radio']} ${inputsError.genderError ? styles['invalid'] : ''}`;
    const professionClasses = `${styles['form-select']} ${inputsError.professionError ? styles['invalid'] : ''}`;

    return (
        <form className={styles['form']} onSubmit={handleFormSubmit}>
            <Input label="Name"  type="text" placeholder='Enter your name' name='name' value={inputs.name} onChange={handleChange} error={inputsError.nameError} styles={nameClasses} />
            <Input label="Email"  type="email" placeholder='Enter your email' name='email' value={inputs.email} onChange={handleChange} error={inputsError.emailError} styles={emailClasses} />
            <Input label="Username"  type="text" placeholder='Enter your username (min. 8 characters)' name='username' value={inputs.username} onChange={handleChange} error={inputsError.usernameError} styles={usernameClasses} />
            <Input label="Mobile Number"  type="text" placeholder='Enter your mobile number' name='phone' value={inputs.phone} onChange={handleChange} error={inputsError.phoneError} styles={phoneClasses} />
            <Gender handleChange={handleChange} gender={inputs.gender} styles={genderClasses} error={inputsError.genderError} />
            <Profession profession={inputs.profession} handleChange={handleChange} styles={professionClasses} error={inputsError.professionError}  />
            <Skills handleChange={handleSkillsChange} error={inputsError.skillsError} skills={skillsState} />
            <Hobbies error={inputsError.hobbiesError} handleChange={handleHobbiesChange} />
            <Input label="Password"  type="password" placeholder='Enter password' name='password' value={inputs.password} onChange={handleChange} error={inputsError.passwordError} styles={passwordClasses} />
            <Input label="Confirm Password"  type="password" placeholder='Enter Confirm password' name='confirmPassword' value={inputs.confirmPassword} onChange={handleChange} error={inputsError.confirmPasswordError} styles={confirmPasswordClasses} />
            <button type='submit' className={styles['btn']}>Submit</button>
        </form>
    )
}

export default Form
