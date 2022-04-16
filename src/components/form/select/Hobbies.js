import React from 'react';
import Select from 'react-select';
import styles from '../../../App.module.css';

const options=[
    {label : 'Cricket' , value : 'Cricket'},
    {label : 'Football' , value : 'Football'},
    {label : 'Watching Movies' , value : 'Watching Movies'},
    {label : 'Travelling' , value : 'Travelling'},
    {label : 'Video Game' , value : 'Video Game'},
    {label : 'Listening Songs' , value : 'Listening Songs'},
    {label : 'Dance' , value : 'Dance'},
    {label : 'Novel Reading' , value : 'Novel Reading'},
]

const Hobbies = ({error , handleChange}) => {

    const hobbiesClassName = `${styles['hobbies']} ${error ? styles['invalid'] : ''}`;

      const customTheme = (theme) => (
          {
            ...theme,
            borderRadius: 8,
      })

    return (
        <div className={hobbiesClassName}>
            <label>Select Hobbies</label>
            <Select 
                name='hobbies'
                options={options}
                onChange={handleChange}
                theme={customTheme}
                isMulti
            />
            {error && <small>{error}</small>}
        </div>
    )
}

export default Hobbies;
