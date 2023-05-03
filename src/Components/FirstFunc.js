import React, { useState } from "react";

function FirstFunction() {
    const [allFormState, setAllFormState] = useState ([]) 
  const [formState, setFormState] = useState({
    name: "",
    department:"",
    rating:"",
});

  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]:e.target.value})
   
  };

  const handleChangeState = () =>{
      const tempObj =[...allFormState];
      tempObj.push(formState);
      setAllFormState(tempObj);
      setFormState({name: "",
      department:"",
      rating:"",})
  }

  return (
    
    <div className="containerOne">
        <form>
      <label>Name :</label>
      <input
        type="text"
        name="name"
        value={formState.name}
        placeholder="enter name"
        onChange={handleChange}
        className="myInput"
      />
      <br />
      <label>Department :</label>
      <input
        type="text"
        name="department"
        placeholder="enter department"
        value={formState.department}
        onChange={handleChange}
        className="myInput"
      />
      <br />
      <label>Rating :</label>
      <input
        type="number"
        name="rating"
        value={formState.rating}
        placeholder="enter rating"
        onChange={handleChange}
        className="myInput"
      />
      <br />

      <button onClick={handleChangeState} type="button">Submit</button>
      </form>
      <br/>
      <br/>
      <div className="flexProperty">
      <div className="containerTwo">
      {
        allFormState.map((value,index) => {
            return (
                <div className="boxes" key={index}>
                    Name: {value.name} |
                    Department : {value.department} |
                    Rating : {value.rating}
                </div>
            )
        })
      }
      </div>
      </div>
    </div>
  );
}

export default FirstFunction;
