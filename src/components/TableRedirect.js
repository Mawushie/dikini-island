import React, { useEffect } from "react";
import axios from "axios";
import xml2js from "xml2js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function TableRedirect() {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const TransactionToken = queryParams.get("TransactionToken");
  console.log(TransactionToken);

  useEffect(() => {
    const testdata = `
<?xml version="1.0" encoding="utf-8"?>
<API3G>
<CompanyToken>8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3</CompanyToken>
<Request>verifyToken</Request>
<TransactionToken>${TransactionToken}</TransactionToken>
</API3G>`;
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/xml",
      },
    };
    let parser = new xml2js.Parser();
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://secure.3gdirectpay.com/API/v6/",
        testdata,
        config
      )
      .then(function (res) {
        console.log(res);
        parser.parseString(res.data, function (err, result) {
          console.log(result);
          if (result.API3G.Result[0] == "000") {
            console.log("yaaa");
            const paystatus = result.API3G.ResultExplanation[0];
            const paymentamount = result.API3G.TransactionAmount[0];
            console.log(paystatus);
            console.log(paymentamount);
            const firstname = localStorage.getItem("firstname");
            const lastname = localStorage.getItem("lastname");
            const useremail = localStorage.getItem("email");
            const table = localStorage.getItem("table");
            const data = {
              user: {
                firstName: `${firstname}`,
                lastLame: `${lastname}`,
                email: `${useremail}`,
                table: `${table}`,
              },
              order: {
                status: `${paystatus}`,
                amount: `${paymentamount}`,
              },
            };
            console.log(data);

            axios
              .post(
                "https://api-dikinisland.onrender.com/api/v1/table/bought",
                data
              )
              .then(function (res) {
                console.log(res.data);
                if (res.data.status == 200) {
                  document.getElementById("confirmed").style.display = "block";
                  localStorage.clear();
                }
              })
              .catch((err) => console.log(err));
          }
        });
      });
  });
  return (
    <div>
      {" "}
      <Div>
        <div className="mb-5">
          {" "}
          <img src="./images/logo3.png" />
        </div>

        <h3>Please wait.</h3>
        <div id="confirmed">
          {" "}
          <Div style={{ textAlign: "center" }}>
            <h3 id="confirmed">Payment Confirmed.</h3>
            <h3>Please check your email for confirmation.</h3>
            <h3 className="mb-4">Thank You</h3>

            <button className="btnSecondary" onClick={() => navigate("/")}>
              Okay
            </button>
          </Div>
        </div>
      </Div>
    </div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export default TableRedirect;
