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
    const customStyles = {
        // option: (provided, state) => ({
        //   ...provided,
        // //   borderBottom: '1px dotted pink',
        // //   color: state.isSelected ? 'red' : 'blue',
        // //   padding: 20,
        // }),
        // control: () => ({
        //   // none of react-select's styles are passed to <Control />
        //   width: '19rem',
        // }),
      }

      const customTheme = (theme) => (
          {
            ...theme,
            borderRadius: 8,
            outline : 'none',
            color : {
                primary : 'rgb(136, 125, 231)'
            }
      })

    return (
        <div className={hobbiesClassName}>
            <label>Select Hobbies</label>
            <Select 
                name='hobbies'
                options={options}
                onChange={handleChange}
                styles={customStyles}
                theme={customTheme}
                isMulti
            />
            {error && <small>{error}</small>}
        </div>
    )
}

export default Hobbies;
