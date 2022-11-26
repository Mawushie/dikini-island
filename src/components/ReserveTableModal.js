import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Moment from "moment";
import axios from "axios";
import Select from "react-select";
import TableSuccess from "./TableSuccess";

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
    const amount = quantity * 200;
    const dateFormat = Moment().format("YYYY/MM/DD HH:MM");
    const date = new Date();
    const tableReserveData = {
      user: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        table: table,
      },
    };

    const testdata = `<API3G>
<CompanyToken>8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3</CompanyToken>
<Request>createToken</Request>
<Transaction>
    <PaymentAmount>300</PaymentAmount>
    <PaymentCurrency>tzs</PaymentCurrency>
    <RedirectURL>http://www.domain.com/payurl.php</RedirectURL>
    <BackURL>http://www.domain.com/backurl.php </BackURL>
    <customerFirstName>John</customerFirstName>
    <customerLastName>Doe</customerLastName>
    <customerEmail>test@directpayonline.com</customerEmail>
</Transaction>
<Services>
  <Service>
    <ServiceType>3854</ServiceType>
    <ServiceDescription>Test Product</ServiceDescription>
    <ServiceDate>2013/12/20 19:00</ServiceDate>
  </Service>
</Services>
</API3G>`;

    console.log(testdata);

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://secure.3gdirectpay.com/API/v6/",
        testdata,

        {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  const handleReserve = () => {
    console.log("table reserved");
    const reserveData = {
      user: {
        firstName: firstname,
        lastname: lastname,
        email: email,
        table: table,
      },
    };
    axios
      .post("http://localhost:3009/api/v1/table/reserve", reserveData)
      .then(function (res) {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    console.log("reserved");
    console.log(reserveData);
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
              <button
                type="button"
                class="btn btnSecondary"
                onClick={handleSubmit}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <TableSuccess />
    </div>
  );
}

export default ReserveTableModal;
