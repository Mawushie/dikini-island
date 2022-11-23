import React from "react";
import styled from "styled-components";
import Table1 from "./Table1";

function Tables() {
  return (
    <div className="tableList">
      {" "}
      <Container>
        <Table1 />
        <Table1 />
        <Table1 />
        <Table1 />
      </Container>
      {/* <Container>
        <Table1 />
        <Table1 />
      </Container> */}
    </div>
  );
}

const Container = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: scroll;
  margin-bottom: 40px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;
export default Tables;
