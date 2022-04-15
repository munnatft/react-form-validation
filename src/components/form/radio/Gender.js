import React from "react";

const Gender = (props) => {

  const { handleChange , gender , error , styles } = props;
  return (
    <div className={styles}>
      <p>Gender</p>
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={gender === "male"}
        />
        <label>Male</label>
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={gender === "female"}
        />
        <label>Female</label>
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="others"
          onChange={handleChange}
          checked={gender === "others"}
        />
        <label>Others</label>
      </div>
      {error && <small>{error}</small>}
    </div>
  );
};

export default Gender;
