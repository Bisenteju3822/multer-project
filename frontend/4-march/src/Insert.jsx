import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Insert = () => {
  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    let value = e.target.files[0];
    setImage(value);
    console.log(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/user/datasave";

    const formData = new FormData();
    formData.append("rollno", rollno);
    formData.append("name", name);
    formData.append("city", city);
    formData.append("image", image);

    try {
      const response = await axios.post(api, formData);
      console.log(response.data);
      toast.success("The data is successfully saved");
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Failed to save data");
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h1 className="mb-4">Insert Employee Records</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicRollno">
          <Form.Label>Roll No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Employee Roll No"
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Employee City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={handleImage} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Insert;
