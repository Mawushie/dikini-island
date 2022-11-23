import React from "react";
import styled from "styled-components";

function Table1() {
  return (
    <div>
      <Container>
        <div>
          <img src="./images/model1.png" />
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  /* width: 327px; */
  background: #ffffff;
  border: 2px solid #e6e6e6;
  border-radius: 16px;
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  /* #reservesm {
    display: none;
  }
  #reservelg {
    display: block;
  }
  @media only screen and (max-width: 400px) {
    #reservesm {
      display: block;
    }
    #reservelg {
      display: none;
    }
  } */
`;

export default Table1;
