import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Moment from "moment";
import axios from "axios";
import Select from "react-select";

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
    const amount = quantity * 200;
    const dateFormat = Moment().format("YYYY/MM/DD HH:MM");
    const date = new Date();
    const receiptData = {
      user: {
        firstname: firstname,
        lastname: lastname,
        email: email,
      },
      order: {
        quantity: quantity,
        amount: amount,
      },
    };
    console.log(receiptData);
    //     const data = `<API3G>
    // <CompanyToken>8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3</CompanyToken>
    // <Request>createToken</Request>
    // <Transaction>
    //     <PaymentAmount>${amount}</PaymentAmount>
    //     <PaymentCurrency>ghc</PaymentCurrency>
    //     <RedirectURL>http://www.domain.com/payurl.php</RedirectURL>
    //     <BackURL>http://www.dikinisland.com </BackURL>
    //     <customerFirstName>John</customerFirstName>
    //     <customerLastName>Doe</customerLastName>
    //     <customerEmail>test@directpayonline.com</customerEmail>
    // </Transaction>
    // <Services>
    //   <Service>
    //     <ServiceType>3854</ServiceType>
    //     <ServiceDescription>Test Product</ServiceDescription>
    //     <ServiceDate>${dateFormat}</ServiceDate>
    //   </Service>
    // </Services>
    // </API3G>`;

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
        "https://secure.3gdirectpay.com/API/v6/",
        { body: testdata },

        {
          "Access-Control-Allow-Origin": true,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (gender == "female") {
      setButtonText("RSVP");
      document.getElementById("quantity").style.display = "none";
      console.log(document.getElementById("quantity"));
    }
    if (gender == "male") {
      setButtonText("Buy a Ticket");
      document.getElementById("quantity").style.display = "block";
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
    </div>
  );
}

export default BuyTicketModal;
