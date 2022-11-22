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
                  <a class="nav-link" href="#topics">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#reviews">
                    Tickets{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
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
        {/* <nav className="navbar navbar-inverse">
          <div className="container">
            <a class="navbar-brand">
              <img src="./images/logo1.png" alt="navlogo" />
            </a>

            <div class="hideBtn">
              <button
                class="navbar-toggle btn"
                type="button"
                data-toggle="collapse"
                data-target="navContent"
              >
                <img src="./images/menu.png" />
              </button>
            </div>
            <div class="collapse navbar-collapse" id="navContent">
              <ul class="navbar-nav flex-row gap-3 d-none d-xl-flex ">
                <li class="nav-item">
                  <a
                    class="nav-link justify-content-center align-items-center px-1  gap-2"
                    href="#"
                  >
                    <p>About</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link justify-content-center align-items-center px-1  gap-2"
                    href="#"
                  >
                    <p>Tickets</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link justify-content-center align-items-center px-1  gap-2"
                    href="#"
                  >
                    <p>Tables</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link justify-content-center align-items-center px-1  gap-2"
                    href="#"
                  >
                    <p>Shop Dikinis</p>
                  </a>
                </li>

                <li class="nav-item">
                  <div class="nav-link justify-content-center align-items-center px-1  gap-2">
                    {" "}
                    <button className="navBtn">Grab a ticket</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/* <div>
          <img src="./images/logo2.png" />
          <div>
            <p className="header-text">
              Whatever Happens On The Island Stays On The Island
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Index;
