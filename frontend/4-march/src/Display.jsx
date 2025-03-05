import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:8000/user/datadisplay";
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container style={{ backgroundColor: "blue", width: "100%" }}>
      <h1 className="my-4">Display Data</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th> Em Roll No</th>
            <th> Em Name</th>
            <th> Em City</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((key) => (
            <tr key={key.rollno}>
              <td>
                <Image
                  src={`http://localhost:8000/uploads/${key.image}`}
                  width="100"
                  height="100"
                  thumbnail
                />
              </td>
              <td>{key.rollno}</td>
              <td>{key.name}</td>
              <td>{key.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Display;
