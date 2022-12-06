import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import axios from "axios";

function Dashboard() {
  const [rsvp, setRsvp] = useState(null);
  const [ticketsBought, setTicketsBought] = useState(null);
  const [tablesBought, setTablesBought] = useState(null);
  const [tablesReserved, setTablesReserved] = useState(null);
  const tablesMap = [
    "Fiji (Cabana) GH¢ 20,000",
    "Aruba (Cabana) GH¢ 12,000",
    "Bora Bora (Long Table) GH¢ 6,000",
    "Bali (Round Table) GH¢ 4,000",
  ];

  useEffect(() => {
    const totalRSVp = async () => {
      axios
        .get("https://api-dikinisland.onrender.com/api/v1/count/rsvps")
        .then((res) => {
          console.log(res.data.totalCount);
          setRsvp(res.data.totalCount);
        });
    };

    const totalBought = async () => {
      axios
        .get("https://api-dikinisland.onrender.com/api/v1/total/tickets")
        .then((res) => {
          console.log(res.data.totalCount);
          setTicketsBought(res.data.totalCount);
        });
    };
    const tablesBought = async () => {
      axios
        .get("https://api-dikinisland.onrender.com/api/v1/total/boughtTables")
        .then((res) => {
          // console.log(res.data.data[0]);
          setTablesBought(res.data.data[0]);
        });
    };
    const tablesReserved = async () => {
      axios
        .get("https://api-dikinisland.onrender.com/api/v1/tables/reserved")
        .then((res) => {
          // console.log(res.data.data[0]);
          setTablesReserved(res.data.data[0]);
        });
    };

    totalRSVp();
    totalBought();
    tablesBought();
    tablesReserved();
  }, []);

  return (
    <div>
      <Div>
        <h1>DASHBOARD</h1>
        <br />
        <Table striped="columns" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>RSVPs</th>
              <th>Tickets Bought</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{rsvp ? rsvp : 0}</td>
              <td>{ticketsBought ? ticketsBought : 0}</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <h2>Tables Bought</h2>
        <br></br>
        <Table striped="columns" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Fiji</th>
              <th>Aruba</th>
              <th>Bora Bora</th>
              <th>Bali</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tablesBought ? tablesBought.Fiji : 0}</td>
              <td>{tablesBought ? tablesBought.Aruba : 0}</td>
              <td>{tablesBought ? tablesBought.Bora : 0}</td>
              <td>{tablesBought ? tablesBought.Bali : 0}</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <h2>Tables Reserved</h2>
        <br></br>
        <Table striped="columns" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Fiji</th>
              <th>Aruba</th>
              <th>Bora Bora</th>
              <th>Bali</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tablesReserved ? tablesReserved.Fiji : 0}</td>
              <td>{tablesReserved ? tablesReserved.Aruba : 0}</td>
              <td>{tablesReserved ? tablesReserved.Bora : 0}</td>
              <td>{tablesReserved ? tablesReserved.Bali : 0}</td>
            </tr>
          </tbody>
        </Table>
      </Div>
    </div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Inner = styled.div`
  display: flex;
`;
export default Dashboard;
