import React from "react";
import "../sass/app.scss";

function Index() {
  return (
    <div>
      <div className="header">
        <nav className="navbar">
          <div className="container">
            <a class="navbar-brand" href={<Index />}>
              <img src="./images/logo1.png" alt="navlogo" />
            </a>
          </div>
        </nav>

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
