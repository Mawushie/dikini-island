import React from "react";
import styled from "styled-components";
import tablesdata from "../tablesdata";

function TableCards(props) {
  const tableitems = tablesdata.map((item) => {
    return (
      <div key={item.id}>
        {" "}
        {item.items.map((list) => {
          <Paragraph>
            <img src="./images/ellipse.png" />
            {list}
          </Paragraph>;
        })}
      </div>
    );
  });
  return (
    <div>
      <Container>
        <p> {props.item.title}</p>

        {tableitems}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 24px;
  gap: 40px;
  width: 327px;
  height: 402px;
  background: #ffffff;
  border: 2px solid #e6e6e6;
  border-radius: 16px;
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
`;

export default TableCards;
