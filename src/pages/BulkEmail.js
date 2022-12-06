import React, { useState } from "react";
import styled from "styled-components";
import * as xlsx from "xlsx";
import Table from "react-bootstrap/Table";
import axios from "axios";

function BulkEmail() {
  const [data, setData] = useState([]);
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        console.log(json);
        setData(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  const handleSend = async () => {
    try {
      await axios
        .post("https://api-dikinisland.onrender.com/api/v1/bulk", data)
        .then((res) => {
          if (res.data.status === 200) {
            alert("success");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Div>
      Bulk Emails
      <label htmlFor="upload">Upload File</label>
      <input type="file" name="upload" id="upload" onChange={readUploadFile} />
      <br></br>
      {data && data.length !== 0 ? (
        <div style={{ width: "50vw" }}>
          <Table striped="columns" style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((s, i) => (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <button onClick={handleSend}>Send</button>
        </div>
      ) : null}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* width: 50vw; */
`;
export default BulkEmail;
