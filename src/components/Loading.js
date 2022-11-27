import React from "react";

function Loading() {
  return (
    <div>
      <div
        class="modal fade"
        id="loadingModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable ">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Please wait....</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
