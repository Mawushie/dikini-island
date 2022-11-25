import React from "react";
import styled from "styled-components";

function Table1() {
  return (
    <div>
      <Container>
        <div>
          <h4 className="mb-4">Fiji (Cabana) GH¢ 20,000</h4>
          <Paragraph>
            <img src="./images/ellipse.png" />
            Jacuzzi
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />
            2x Moet Rose
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />
            1x Hennessy VS
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />
            1x Johnny Walker Double Black
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />
            1x Belaire Luxe
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />
            12x Chasers (Bel Ice and Coke)
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />
            2x Seafood Platter with Pork/Chicken Wings with a Side of Fried
            Yam/Potatoes
          </Paragraph>
          <Paragraph>
            <img src="./images/ellipse.png" />
            12 Complimentary bands
          </Paragraph>
        </div>

        <div className="buttons">
          {" "}
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
  height: 510px;
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
