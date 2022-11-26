import React, { useEffect, useState } from "react";

function TableSuccess() {
  return (
    <div>
      <div
        class="modal fade successModal"
        id="tableSucess"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Table Reservation
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Table Reserved. Check your email for confirmation.
            </div>
            {/* <div class="modal-footer">
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
             
              >
                {buttonText}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableSuccess;
