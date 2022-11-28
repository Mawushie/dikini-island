import React, { useEffect, useState } from "react";
import styled from "styled-components";
import decode from "jwt-decode";
function PaymentCorfirmed() {
  const [info, setInfo] = useState(null);
  const queryParams = new URLSearchParams(window.location.search);
  const TransactionToken = queryParams.get("token");
  function verifyToken(token) {
    return decode(token);
  }

  useEffect(() => {
    const tokenValidated = verifyToken(TransactionToken);

    setInfo(tokenValidated.data);
  }, []);
  return (
    <Div>
      {info ? (
        <div>
          {info.status === "Transaction Paid" ? (
            <img src="./images/checked.png" />
          ) : (
            <img src="./images/wrong.webp" />
          )}
          <h2>Payment Confirmed</h2>
          <h2>{`${info.firstName} ${info.lastName}`}</h2>
          <h2>{`GHC${info.amount}`}</h2>
          <h2>{info.status}</h2>
          <h2>{info.table}</h2>
        </div>
      ) : null}
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
