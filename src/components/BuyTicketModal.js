import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Moment from "moment";
import axios from "axios";
import Select from "react-select";
import xml2js from "xml2js";
import SuccessModal from "./SuccessModal";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function BuyTicketModal() {
  const [buttonText, setButtonText] = useState("Buy a ticket");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [errorText, setErrorText] = useState("");
  const [checked, setChecked] = useState(false);
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
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (!firstname) {
      setErrorText("Please fill in all details");
      return;
    } else {
      setErrorText("");
    }
    if (!lastname) {
      setErrorText("Please fill in all details");
      return;
    } else {
      setErrorText("");
    }
    if (!email) {
      setErrorText("Please fill in all details");
      return;
    } else {
      setErrorText("");
    }
    if (!phone) {
      setErrorText("Please fill in all details");
      return;
    } else {
      setErrorText("");
    }
    if (!gender) {
      setErrorText("Please fill in all details");
      return;
    } else {
      setErrorText("");
    }
    // if (!quantity) {
    //   setErrorText("Please fill in all details");
    //   return;
    // } else {
    //   setErrorText("");
    // }

    // setChecked(true);
    document
      .getElementById("buyButton")
      .setAttribute("data-bs-target", "#loadingModal");
    localStorage.setItem("firstname", `${firstname}`);
    localStorage.setItem("lastname", `${lastname}`);
    localStorage.setItem("email", `${email}`);
    const amount = quantity * 200;
    const dateFormat = Moment().format("YYYY/MM/DD HH:MM");
    const date = new Date();
    if (gender == "female") {
      document.getElementById("quantity").style.display = "none";
      const data = {
        user: {
          firstName: `${firstname}`,
          lastName: `${lastname}`,
          email: `${email}`,
        },
      };
      // console.log(data);
      axios
        .post("https://api-dikinisland.onrender.com/api/v1/female/rsvp", data)
        .then(function (res) {
          // console.log(res.data);
          // alert("RSVP CONFIRMED");
        })
        .catch((err) => console.log(err));
      // console.log(firstname, lastname, email);
    } else {
      // console.log("mmmmmm");
      const data = `<API3G>
        <CompanyToken>342D7169-FD79-4159-87F8-77642BCF0D88</CompanyToken>
        <Request>createToken</Request>
        <Transaction>
            <PaymentAmount>1</PaymentAmount>
            <PaymentCurrency>ghs</PaymentCurrency>
            <RedirectURL>https://dikinisland.com/redirect</RedirectURL>
            <BackURL>https://www.dikinisland.com </BackURL>
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
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/xml",
        },
      };
      let parser = new xml2js.Parser();
      axios
        .post(
          "https://api-dikinisland.onrender.com/api/v1/payment",
          data,
          config
        )
        .then(function (res) {
          console.log(res);
          parser.parseString(res.data, function (err, result) {
            // console.log(result.API3G.Result[0]);
            if (result.API3G.Result[0] == "000") {
              // console.log("yaaa");
              window.open(
                `  https://secure.3gdirectpay.com/pay.asp?ID=${result.API3G.TransToken[0]} `,
                "_self"
              );
            }
          });
        })
        .catch((err) => console.log(err));
    }
    // setModalData({
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   quantity: "",
    // });
  }

  useEffect(() => {
    if (gender == "female") {
      // setButtonText("RSVP");
      document.getElementById("quantity").style.display = "none";
      document.getElementById("buyButton").style.display = "none";
      document.getElementById("rsvpbutton").style.display = "block";
      //   console.log(document.getElementById("quantity"));
    }
    if (gender == "male") {
      setButtonText("Buy a Ticket");
      document.getElementById("rsvpbutton").style.display = "none";
      document.getElementById("buyButton").style.display = "block";
      document.getElementById("quantity").style.display = "block";
    }
    if (quantity) {
      const newText = `Buy Ticket GH₵${quantity * 200}`;
      document.getElementById("buyButton").style.width = "200px";
      setButtonText(newText);
    }
    if ((firstname, lastname, email, phone, gender, quantity)) {
      setChecked(true);
    }
    if (checked == true) {
      // console.log("yess");
      document.getElementById("buyButton").style.display = "none";
      document.getElementById("buyButton2").style.display = "block";
      document.getElementById("buyButton2").style.width = "200px";
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
              <p className="errorText mb-2 mx-2">{errorText}</p>
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
                data-bs-target="#successModal"
                type="button"
                class="btn btnSecondary"
                onClick={handleSubmit}
                id="rsvpbutton"
              >
                RSVP
              </button>
              <button
                type="button"
                class="btn btnSecondary"
                onClick={handleSubmit}
                id="buyButton"
              >
                {buttonText}
              </button>
              {/* <a
                href="https://shop.directpay.online/paymybills/THEPLATINUMBAYHOTEL"
                // target="_blank"
                className="buyLink"
              > */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#loadingModal"
                type="button"
                class="btn btnSecondary"
                onClick={handleSubmit}
                id="buyButton2"
              >
                {buttonText}
              </button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
      <SuccessModal />
      <Loading />
    </div>
  );
}

export default BuyTicketModal;
