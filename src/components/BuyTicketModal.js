import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function BuyTicketModal() {
  const [buttonText, setButtonText] = useState("Buy a ticket");
  const [phone, setPhone] = useState("");
  const [modalData, setModalData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    quantity: "",
  });

  const { firstname, lastname, email, gender, quantity } = modalData;
  function handleOnChange(event) {
    if (gender == "female") {
      setButtonText("RSVP");
    }
    if (gender == "male") {
      setButtonText("Buy a Ticket");
    }
    event.preventDefault();

    setModalData({ ...modalData, [event.target.name]: event.target.value });
    const { name, value } = event.target;
  }
  function handleSubmit() {
    const data = { firstname, lastname, email, amount: quantity * 200 };
    console.log(data);
  }
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
                <select
                  name="gender"
                  value={gender}
                  className="w-100 inputs"
                  onChange={handleOnChange}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <input
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
