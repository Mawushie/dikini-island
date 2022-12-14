import React, { useEffect, useState } from "react";

function SuccessModal() {
  return (
    <div>
      <div
        class="modal fade successModal"
        id="successModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                RSVP(Ladies)
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Ticket Reserved. Check your email for confirmation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
