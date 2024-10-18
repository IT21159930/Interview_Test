import React, { useState, useEffect } from "react";
import axios from "axios";
import './Styles.css';  

const InformationForm = () => {
  const [vehicle_make, setVehicle_make] = useState("");
  const [vehicle_model, setVehicle_model] = useState("");
  const [body_type, setBody_type] = useState("");
  const [regno, setRegno] = useState("");
  const [milage, setMilage] = useState("");
  const [engine, setEngine] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");
  const [district, setDistrict] = useState("");
  const [grade, setGrade] = useState("");
  const [colour, setColour] = useState("");
  const [icolour, setIcolour] = useState("");
  const [noofowners, setNoofowners] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
 
  const submitInformation = () => {
    
      axios.post("http://localhost:8070/test/add", {
        vehicle_make,
        vehicle_model,
        body_type,
        regno,
        milage,
        engine,
        fuel,
        year,
        district,
        grade,
        colour,
        icolour,
        noofowners,
        file



      }).then(() => {
        alert("Information added successfully");
        fetchInformation();
        resetForm();
      }).catch((error) => {
        console.error("Error adding data", error);
      });
    }
  


  return (
    <div className="container">
            <div className="form-group">
        <label>Vehicle Make</label>
        <input
          type="text"
          value={vehicle_make}
          onChange={(e) => setVehicle_make(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Vehicle Model</label>
        <input
          type="text"
          value={vehicle_model}
          onChange={(e) => setVehicle_model(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Body Type</label>
        <input
          type="text"
          value={body_type}
          onChange={(e) => setBody_type(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Vehicle Registration Number</label>
        <input
          type="text"
          value={regno}
          onChange={(e) => setRegno(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Milage</label>
        <input
          type="number"
          value={milage}
          onChange={(e) => setMilage(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Engine CC</label>
        <input
          type="text"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Fuel Type</label>
        <input
          type="text"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Year of Manufactured</label>
        <input
          type="date"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>district</label>
        <input
          type="text"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Vehicle Grade</label>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Exterior Colour</label>
        <input
          type="text"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
          
        />
      </div>
      <div className="form-group">
        <label>Interior Colour</label>
        <input
          type="text"
          value={icolour}
          onChange={(e) => setIcolour(e.target.value)}
        />
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>

      <div className="form-group">
        <button onClick={submitInformation}>
          {"Submit"}
        </button>
      </div>
    </div>
  );
};

export default InformationForm;
