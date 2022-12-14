import React from "react";
import styled from "styled-components";

function Table3() {
  return (
    <div>
      <Container>
        <div>
          <h4 className="mb-4">Bora Bora (Long Table) GH¢ 6,000</h4>
          <Paragraph>
            <img src="./images/ellipse.png" />
            2x Belaire Rose
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />
            1x Johnny Walker(Double Black, Red or Gold Label)
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />
            6x Chasers (Bel Ice and Coke)
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />6 Complimentary bands
          </Paragraph>
        </div>

        <div>
          <ButtonDiv>
            <button
              className="btnPrimary"
              id="reservelg"
              data-bs-toggle="modal"
              data-bs-target="#reserveModal"
            >
              Reserve a table
            </button>

            <button
              className="btnSecondary"
              data-bs-toggle="modal"
              data-bs-target="#reserveModal"
            >
              Buy a table
            </button>
          </ButtonDiv>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  /* width: 327px; */
  background: #ffffff;
  border: 2px solid #e6e6e6;
  border-radius: 16px;
  height: 515px;
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
`;

export default Table3;
