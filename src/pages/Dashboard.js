import React from "react";
import styled from "styled-components";
function Dashboard() {
  return (
    <div>
      <Div>
        <h1>DASHBOARD</h1>
        <br />
        <h3>Number of RSVPS:</h3>
        <br />
        <h3>Number of Tickets Bought:</h3>
        <br />
        <h3>Tables Reserved:</h3>
        <br />
        <h3>Tables Bought:</h3>
        <br />
      </Div>
    </div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
`;
export default Dashboard;
