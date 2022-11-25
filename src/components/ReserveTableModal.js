import React from "react";
import PhoneInput from "react-phone-input-2";
function ReserveTableModal() {
  return (
    <div>
      {" "}
      {/*Reserve Ticket Modal*/}
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
              <form>
                <input
                  type="text"
                  placeholder="Type your first name here"
                  className="w-100 inputs"
                />
                <input
                  type="text"
                  placeholder="Type your last name here"
                  className="w-100 inputs"
                />
                <input
                  type="email"
                  placeholder="Type your email address here"
                  className="w-100 inputs"
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
                  // disableCountryCode
                  placeholder=""
                  required={true}
                  dropdownClass="myClass"
                />
                <select
                  name="cars"
                  id="tables"
                  form="carform"
                  className="w-100 inputs"
                >
                  <option value="cabana">Fiji (Cabana) GH¢ 20,000</option>
                  <option value="aruba">Aruba (Cabana) GH¢ 12,000</option>
                  <option value="borabora">
                    Bora Bora (Long Table) GH¢ 6,000
                  </option>
                  <option value="bali">Bali (Round Table) GH¢ 3,000</option>
                </select>
                <input
                  type="number"
                  placeholder="Enter quantity of tickets you’d like to buy"
                  className="w-100 inputs"
                />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btnPrimary"
                data-bs-dismiss="modal"
              >
                Reserve table
              </button>
              <button type="button" class="btn btnSecondary">
                Buy table
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReserveTableModal;
