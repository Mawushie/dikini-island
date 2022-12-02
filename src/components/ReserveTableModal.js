import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Moment from "moment";
import axios from "axios";
import xml2js from "xml2js";
import Select from "react-select";
import TableSuccess from "./TableSuccess";
import Loading from "./Loading";

function ReserveTableModal() {
  const [buttonText, setButtonText] = useState("Buy table");
  const [phone, setPhone] = useState("");
  const [table, setTable] = useState("");
  const [modalData, setModalData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    quantity: "",
  });
  const option = [
    { value: "Fiji (Cabana) GH¢ 20,000", label: "Fiji (Cabana) GH¢ 20,000" },
    { value: "Aruba (Cabana) GH¢ 12,000", label: "Aruba (Cabana) GH¢ 12,000" },
    {
      value: "Bora Bora (Long Table) GH¢ 6,000",
      label: "Bora Bora (Long Table) GH¢ 6,000",
    },
    {
      value: "Bali (Round Table) GH¢ 4,000",
      label: "Bali (Round Table) GH¢ 4,000",
    },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      height: "100%",
      minHeight: 56,
      borderColor: "#d9d9d9",
      borderRadius: 8,
      marginTop: 20,
      marginBottom: 20,
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#e8e8e8" : null,
        color: "#001927",
      };
    },
  };

  const handleSelect = (event) => {
    setTable(event.value);
  };
  const { firstname, lastname, email, quantity } = modalData;
  function handleOnChange(event) {
    event.preventDefault();

    setModalData({ ...modalData, [event.target.name]: event.target.value });
    const { name, value } = event.target;
  }

  //   console.log(gender);
  function handleSubmit() {
    localStorage.setItem("firstname", `${firstname}`);
    localStorage.setItem("lastname", `${lastname}`);
    localStorage.setItem("email", `${email}`);
    localStorage.setItem("table", `${table}`);
    var amount;
    if (table == "Fiji (Cabana) GH¢ 20,000") {
      amount = "20000";
    }
    if (table == "Aruba (Cabana) GH¢ 12,000") {
      amount = "12000";
    }
    if (table == "Bora Bora (Long Table) GH¢ 6,000") {
      amount = "6000";
    }
    if (table == "Bali (Round Table) GH¢ 4,000") {
      amount = "400";
    }

    const dateFormat = Moment().format("YYYY/MM/DD HH:MM");
    const date = new Date();
    const tableReserveData = {
      user: {
        firstName: firstname,
        lastname: lastname,
        email: email,
        table: table,
      },
    };

    const data = `<API3G>
<CompanyToken>342D7169-FD79-4159-87F8-77642BCF0D88</CompanyToken>
<Request>createToken</Request>
<Transaction>
    <PaymentAmount>1</PaymentAmount>
    <PaymentCurrency>ghs</PaymentCurrency>
    <RedirectURL>https://dikinisland.com/tableredirect</RedirectURL>
    <BackURL>https://dikinisland.com </BackURL>
    <customerFirstName>${firstname}</customerFirstName>
    <customerLastName>${lastname}</customerLastName>
    <customerEmail>${email}</customerEmail>
</Transaction>
<Services>
  <Service>
    <ServiceType>63948</ServiceType>
    <ServiceDescription>Events</ServiceDescription>
    <ServiceDate>${dateFormat}</ServiceDate>
  </Service>
</Services>
</API3G>`;

    // console.log(data);
    let parser = new xml2js.Parser();
    axios
      .post(
        "https://api-dikinisland.onrender.com/api/v1/payment",
        data,

        {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
        }
      )
      .then(function (res) {
        parser.parseString(res.data, function (err, result) {
          console.log(result.API3G.Result[0]);
          if (result.API3G.Result[0] == "000") {
            // console.log("yaaa");
            window.open(
              ` https://secure.3gdirectpay.com/payv2.php?ID=${result.API3G.TransToken[0]} `,
              "_self"
            );
          }
        });
      })
      .catch((err) => console.log(err));
  }
  const handleReserve = () => {
    // console.log("table reserved");
    const reserveData = {
      user: {
        firstName: firstname,
        lastname: lastname,
        email: email,
        table: table,
      },
    };
    axios
      .post(
        "https://api-dikinisland.onrender.com/api/v1/table/reserve",
        reserveData
      )
      .then(function (res) {
        // console.log(res.data);
      })
      .catch((err) => console.log(err));

    // console.log("reserved");
    // console.log(reserveData);
  };

  return (
    <div>
      <div
        class="modal fade"
        id="reserveModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Reserve Table
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  name="firstname"
                  value={firstname}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Type your first name here"
                  className="w-100 inputs"
                />
                <input
                  name="lastname"
                  value={lastname}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Type your last name here"
                  className="w-100 inputs"
                />
                <input
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Type your email address here"
                  className="w-100 inputs"
                  onChange={handleOnChange}
                />
                <PhoneInput
                  inputStyle={{
                    width: "100%",
                    height: 56,
                    backgroundColor: "#FFFFFF",
                    border: 1,
                    borderStyle: "solid",
                    borderColor: "#E7E9EB",
                    borderRadius: 8,
                  }}
                  country={"gh"}
                  onlyCountries={["gh"]}
                  enableSearch={true}
                  onChange={(phone) => {
                    setPhone(phone);
                  }}
                  // disableCountryCode
                  placeholder=""
                  name="phone"
                  value={phone}
                  required={true}
                  dropdownClass="myClass"
                />

                <div>
                  <Select
                    // value={table}
                    options={option}
                    styles={customStyles}
                    placeholder="Select table"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    onChange={handleSelect}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btnPrimary"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target="#tableSucess"
                onClick={handleReserve}
              >
                Reserve table
              </button>
              {/* <a
                href="https://shop.directpay.online/paymybills/THEPLATINUMBAYHOTEL"
                className="buyLink"
              > */}
              <button
                type="button"
                class="btn btnSecondary"
                data-bs-toggle="modal"
                data-bs-target="#loadingModal"
                onClick={handleSubmit}
              >
                {buttonText}
              </button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
      <TableSuccess />
      <Loading />
    </div>
  );
}

export default ReserveTableModal;
