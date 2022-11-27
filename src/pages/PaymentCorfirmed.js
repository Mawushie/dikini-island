import React from "react";
import styled from "styled-components";
function PaymentCorfirmed() {
  return (
    <Div>
      <img src="./images/checked.png" />
      <h2>Payment Confirmed</h2>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export default PaymentCorfirmed;
