import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Moment from "moment";
import axios from "axios";
import Select from "react-select";
import xml2js from "xml2js";
import SuccessModal from "./SuccessModal";

function BuyTicketModal() {
  const [buttonText, setButtonText] = useState("Buy a ticket");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const [modalData, setModalData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    quantity: "",
  });
  const option = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
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
  const { firstname, lastname, email, quantity } = modalData;
  function handleOnChange(event) {
    event.preventDefault();

    setModalData({ ...modalData, [event.target.name]: event.target.value });
    const { name, value } = event.target;
  }

  const handleSelectChange = (event) => {
    setGender(event.value);
  };
  //   console.log(gender);
  function handleSubmit() {
    localStorage.setItem("firstname", `${firstname}`);
    localStorage.setItem("lastname", `${lastname}`);
    localStorage.setItem("email", `${email}`);
    const amount = quantity * 200;
    const dateFormat = Moment().format("YYYY/MM/DD HH:MM");
    const date = new Date();
    if (buttonText == "RSVP") {
      const data = {
        user: {
          firstName: `${firstname}`,
          lastLame: `${lastname}`,
          email: `${email}`,
        },
      };
      console.log(data);
      axios
        .post("http://localhost:3009/api/v1/female/rsvp", data)
        .then(function (res) {
          console.log(res.data);
          alert("RSVP CONFIRMED");
        })
        .catch((err) => console.log(err));
      console.log(firstname, lastname, email);
    } else {
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
      const data = `<API3G>
    <CompanyToken>8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3</CompanyToken>
    <Request>createToken</Request>
    <Transaction>
        <PaymentAmount>${amount}</PaymentAmount>
        <PaymentCurrency>tzs</PaymentCurrency>
        <RedirectURL>https://dikinisland.com/redirect</RedirectURL>
        <BackURL>https://www.dikinisland.com </BackURL>
        <customerFirstName>${firstname}</customerFirstName>
        <customerLastName>${lastname}</customerLastName>
        <customerEmail>${email}</customerEmail>
    </Transaction>
    <Services>
      <Service>
        <ServiceType>3854</ServiceType>
        <ServiceDescription>Test Product</ServiceDescription>
        <ServiceDate>${dateFormat}</ServiceDate>
      </Service>
    </Services>
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
          data,
          config
        )
        .then(function (res) {
          parser.parseString(res.data, function (err, result) {
            console.log(result.API3G.Result[0]);
            if (result.API3G.Result[0] == "000") {
              console.log("yaaa");
              window.open(
                ` https://secure.3gdirectpay.com/payv2.php?ID=${result.API3G.TransToken[0]} `,
                "_self"
              );
            }
          });
        })
        .catch((err) => console.log(err));
    }
    setModalData({
      firstname: "",
      lastname: "",
      email: "",
      quantity: "",
    });
  }

  useEffect(() => {
    if (gender == "female") {
      setButtonText("RSVP");
      document.getElementById("quantity").style.display = "none";
      //   console.log(document.getElementById("quantity"));
    }
    if (gender == "male") {
      setButtonText("Buy a Ticket");
      document.getElementById("quantity").style.display = "block";
    }
    if (quantity) {
      const newText = `Buy Ticket GHC${quantity * 200}`;
      document.getElementById("buyButton").style.width = "200px";
      setButtonText(newText);
    }
  });
  return (
    <div>
      <div
        class="modal fade"
        id="buyTicketModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Buy Ticket
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
                  required={true}
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
                    onChange={handleSelectChange}
                    options={option}
                    styles={customStyles}
                    placeholder="Gender"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </div>

                <input
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  type="number"
                  placeholder="Enter quantity of tickets you’d like to buy"
                  className="w-100 inputs"
                  onChange={handleOnChange}
                  min="1"
                />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btnPrimary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                data-bs-toggle="modal"
                // data-bs-target="#successModal"
                type="button"
                class="btn btnSecondary"
                onClick={handleSubmit}
                id="buyButton"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal />
    </div>
  );
}

export default BuyTicketModal;
