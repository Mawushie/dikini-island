import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../sass/app.scss";

function Index() {
  return (
    <div>
      <div className="header">
        <nav class="navbar navbar-expand-md navbar-light fixed-top">
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
                  <a class="nav-link" href="#reviews">
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
                  <a class="nav-link" href="#contact">
                    <button className="navBtn">Grab a ticket</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="content">
          <div id="logo2">
            <img src="./images/logo2.png" alt="logo2" />
          </div>

          <p className="secret">Whatever Happens On The Island</p>
          <p className="secret">Stays On The Island</p>
          <p>17th December, 2022</p>
          <p>The Platinum Bay Hotel</p>
        </div>
      </div>
      <div className="description" id="about">
        <div>
          {" "}
          <p className="details mx-4">
            Bringing You The Very First Island Party Experience Here In Ghana.
          </p>
          <p className="details mx-4">
            The Best Beach And Pool Parties Will Be Happening Right Here On The
            Island As Well
          </p>
          <p className="details mx-4">
            {" "}
            An Indoor Club Later In The Night. Three Parties In One!
          </p>
          <p className="details mx-4 ">
            {" "}
            It’s All About Unlimited And Non Stop Vibes.
          </p>
          <p className="m-4">
            See You On 17th December, 2022 2:00 PM At The Platinum Bay Hotel
          </p>
        </div>

        <button className="btnSecondary">Grab a ticket</button>
      </div>

      <div className="tableSection" id="tables">
        {" "}
        <p id="packages">Table Packages</p>
      </div>
    </div>
  );
}

export default Index;
