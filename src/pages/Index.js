import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../sass/app.scss";
import "react-phone-input-2/lib/style.css";
import Model1 from "../components/Model1";
import Table1 from "../components/Table1";
import Table2 from "../components/Table2";
import Model2 from "../components/Model2";
import Model3 from "../components/Model3";
import Model4 from "../components/Model4";
import Table3 from "../components/Table3";
import Table4 from "../components/Table4";
import BuyTicketModal from "../components/BuyTicketModal";
import ReserveTableModal from "../components/ReserveTableModal";
import SuccessModal from "../components/SuccessModal";

function Index() {
  useEffect(() => {
    const images = [
      "url('./images/background3.png')",
      "url('./images/backgroundlg.png')",
      "url('./images/background1.png')",
      "url('./images/background2.png')",
      "url('./images/background4.png')",
    ];
    var count = 0;
    const backgroundSlider = document.getElementById("header");
    backgroundSlider.style.backgroundImage = images[4];
    const interval = setInterval(function () {
      backgroundSlider.style.backgroundImage = images[count];
      count = count + 1;
      if (count == images.length) {
        count = 0;
      }
      // console.log(backgroundSlider);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="header" id="header">
        <nav className="navbar navbar-expand-md navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="#intro">
              <img src="./images/logo1.png" alt="navlogo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#ticket">
                    Tickets{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tables">
                    Tables{" "}
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://swimsbydidi.com/"
                    target="_blank"
                  >
                    Shop Dikinis
                  </a>
                </li>
                <li className="nav-item">
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
          <div style={{ textAlign: "center" }}>
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

      <BuyTicketModal />
      <ReserveTableModal />
      <SuccessModal />
    </div>
  );
}

export default Index;
