import React from "react";
import styled from "styled-components";

function Models() {
  return (
    <div className="tableList">
      <Container>
        <img src="./images/model1.png" /> <img src="./images/model2.png" />
        <img src="./images/model3.png" /> <img src="./images/model4.png" />
      </Container>
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
export default Models;
