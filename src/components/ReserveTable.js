import React from "react";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
function ReserveTableModal() {
  const option = [
    { value: "fiji", label: "Fiji (Cabana) GH¢ 20,000" },
    { value: "fiji", label: "Aruba (Cabana) GH¢ 12,000" },
    { value: "borabora", label: "Bora Bora (Long Table) GH¢ 6,000" },
    { value: "bali", label: "Bali (Round Table) GH¢ 3,000" },
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

  const handleReserve = () => {
    console.log("reserved");
  };
  const handleBuy = () => {
    console.log("bought");
  };
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

                <div>
                  <Select
                    options={option}
                    styles={customStyles}
                    placeholder="Select table"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btnPrimary"
                data-bs-dismiss="modal"
                onClick={handleReserve}
              >
                Reserve table
              </button>
              <button
                type="button"
                class="btn btnSecondary"
                onClick={handleBuy}
              >
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
