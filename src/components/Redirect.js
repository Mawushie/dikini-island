import React, { useEffect } from "react";
import axios from "axios";
import xml2js from "xml2js";
import BuyTicketModal from "./BuyTicketModal";

function Redirect() {
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

            const data = {
              user: {
                firstName: `${firstname}`,
                lastLame: `${lastname}`,
                email: `${useremail}`,
              },
              order: {
                status: `${paystatus}`,
                amount: `${paymentamount}`,
              },
            };
            console.log(data);

            axios
              .post("http://localhost:3009/api/v1/email/confirmation", data)
              .then(function (res) {
                console.log(res.data);
              })
              .catch((err) => console.log(err));
            console.log(
              firstname,
              lastname,
              useremail,
              paystatus,
              paymentamount
            );
          }
        });
      })
      .catch((err) => console.log(err));
  });
  return <div>Redirect Page</div>;
}

export default Redirect;