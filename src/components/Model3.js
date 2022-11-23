import React from "react";
import styled from "styled-components";

function Model3() {
  return (
    <div>
      <Container>
        <div>
          <img src="./images/model3.png" className="image" />
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

  @media screen and (max-width: 576px) {
    align-items: center;
    padding: 4px;
    img {
      object-fit: cover;
    }
  }

  .image {
    object-fit: cover;
  }
`;

export default Model3;
