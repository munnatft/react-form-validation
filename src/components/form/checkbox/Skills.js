import React from 'react';
import classes from '../../../App.module.css';

const options = [
    'HTML5',
    'CSS3',
    'Python',
    'Java',
    'C++',
    'C',
    'React JS',
    'Node JS',
    'DevOps',
    'Go Lang',
    'Django',
    'Laravel'
]

const Skills = (props) => {

    const { error , handleChange , skills } = props;

    const checkboxClasses = `${classes['skills-box']} ${error ? classes['invalid'] : ''}`;

    // const handleCheck = () => {
    //     if(skills.length !== 0) {

    //     }

    //     return false;
    // }

    return (
        <div className={checkboxClasses}>
            <p>Skills</p>
            <div className={classes['checkboxes']}>
                {
                    options.map((data) => {
                        return (
                            <div key={data} className={classes['form-check']}>
                                <input type="checkbox" name='skills'value={data} onChange={handleChange} />
                                <label >{data}</label>
                            </div>
                        )
                    })
                }
                
            </div>
            {error && <small>{error}</small>}
        </div>
    )
}

export default Skills;
