import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../sass/app.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Model1 from "../components/Model1";
import Table1 from "../components/Table1";
import Table2 from "../components/Table2";
import Model2 from "../components/Model2";
import Model3 from "../components/Model3";
import Model4 from "../components/Model4";
import Table3 from "../components/Table3";
import Table4 from "../components/Table4";

function Index() {
  return (
    <div>
      <div className="header">
        <nav class="navbar navbar-expand-md navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#intro">
              <img src="./images/logo1.png" alt="navlogo" />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#ticket">
                    Tickets{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#tables">
                    Tables{" "}
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://swimsbydidi.com/"
                    target="_blank"
                  >
                    Shop Dikinis
                  </a>
                </li>
                <li class="nav-item">
                  <button
                    className="navBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#buyTicketModal"
                  >
                    Grab a ticket
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="content">
          <div id="logo2">
            <img src="./images/logo2.png" alt="logo2" />
          </div>
          <div id="ticket">
            {" "}
            <button
              className="btnSecondary headerbtn"
              data-bs-toggle="modal"
              data-bs-target="#buyTicketModal"
              id="hero-btn"
            >
              Grab a ticket
            </button>
          </div>

          <p className="secret">Whatever Happens On The Island</p>
          <p className="secret">Stays On The Island</p>
          <p className="secret">17th December, 2022</p>
          <p className="secret">The Platinum Bay Hotel</p>
        </div>
      </div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="description" id="about">
        <div>
          <p className="details secret">Whatever Happens On The Island,</p>
          <p className="secret">Stays On The Island!</p>
          <p className="details mx-4">
            Bringing You The Very First Island Party Experience Here In Ghana.
          </p>
          <p className="details mx-4">
            The Best Beach And Pool Parties Will Be Happening Right Here On The
            Island As Well
          </p>
          <p className="details mx-4">
            An Indoor Club Later In The Night. Three Parties In One!
          </p>
          <p className="details mx-4 ">
            It’s All About Unlimited And Non Stop Vibes.
          </p>
          <p className="m-4">
            See You On 17th December, 2022 2:00 PM At The Platinum Bay Hotel
          </p>
          <button
            className="btnSecondary"
            data-bs-toggle="modal"
            data-bs-target="#buyTicketModal"
          >
            Grab a ticket
          </button>
        </div>
      </div>

      <div className="tableSection" id="tables">
        <p id="packages">Table Packages</p>
        <div className="tables">
          <Table1 />
          <Table2 />
          <Table3 />
          <Table4 />
        </div>
      </div>

      <div className="shop ">
        <p>Shop the dikinis</p>
        <a class="nav-link" href="https://swimsbydidi.com/" target="_blank">
          <button className="btnPrimary">Visit shop</button>
        </a>
      </div>
      <div className="modelSection mx-4">
        <div className="models">
          <Model1 />
          <Model2 />
          <Model3 />
          <Model4 />
        </div>
      </div>

      <div className="tableSection mx-4" id="tables">
        <p id="packages">Discover The Platinum Bay Hotel</p>
        <div className="hotels">
          <img src="./images/hotel1.png" />
          <img src="./images/hotel2.png" />
          <img src="./images/hotel3.png" />
        </div>
        <div class="platinumSocials">
          <p>Follow The Platinum Bay on socials</p>
          <div>
            <a href="https://twitter.com/theplatinumbay1" target="_blank">
              <img src="./images/twitter.png" />
            </a>
            <a
              href="https://www.instagram.com/theplatinumbayhotel"
              target="_blank"
            >
              <img src="./images/instagram.png" />
            </a>
            <a href="https://theplatinumbayhotel.net" target="_blank">
              <img src="./images/website.png" />
            </a>
          </div>
        </div>
      </div>

      <div className="partners mx-4">
        <p className="fw-bold">Official Partners</p>
        <div className="partnerslogos1">
          <img src="./images/tsfgroup.png" />
          <img src="./images/belaqua.png" />
          <img src="./images/belice.png" />
        </div>

        <div className="partnerslogos2">
          <div className="mb-4" id="part2">
            <img src="./images/tsfgroup.png" id="tsf" />
            <img src="./images/belice.png" id="belice" />
          </div>
          <div>
            <img src="./images/belaqua.png" id="belaqua" />
          </div>
        </div>
      </div>

      <div className="footer">
        <div>© Dikini Island 2022</div>
        <div className="socials">
          <a
            href="https://web.facebook.com/swimsbydidi?_rdc=1&_rdr"
            target="_blank"
          >
            <img src="./images/facebook.png" />
          </a>
          <a href="https://twitter.com/swimsbydidi" target="_blank">
            <img src="./images/twitter.png" />
          </a>
          <a href="https://www.instagram.com/swimsbydidi/" target="_blank">
            <img src="./images/instagram.png" />
          </a>
        </div>
      </div>

      {/*Buy Ticket Modal*/}
      <div
        class="modal fade"
        id="buyTicketModal"
        tabindex="-1"
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
                <select name="cars" form="carform" className="w-100 inputs">
                  <option value="volvo">Male</option>
                  <option value="saab">Female</option>
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
                Cancel
              </button>
              <button type="button" class="btn btnSecondary">
                Buy a ticket
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Reserve Ticket Modal*/}
      <div
        class="modal fade"
        id="reserveModal"
        tabindex="-1"
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

export default Index;
