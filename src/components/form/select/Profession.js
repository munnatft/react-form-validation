import React from 'react';

const options = [
    'Software Enginner',
    'Software Trainee',
    'Testing Engineer',
    'DevOps Engineer',
    'Fullstack Enginweer',
    'Frontend Engineer',
    'Backend Engineer'
]

const Profession = (props) => {

    const { profession , handleChange, styles , error } = props
    return (
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
    )
}

export default Profession
