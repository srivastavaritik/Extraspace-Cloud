import React from "react";
import "./css/about.css";

import dataSecurity from "./images/data-security.svg";
import wallet from "./images/wallet.svg";
import decentralize from "./images/decentralize.svg";

export default function AboutDemo() {
  return (
    <div className="about">
      <div className="logo" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <div className="abt-cont">
              <div className="row">
                <div className="abt-title">About Us</div>
                <div className="abt-desc">
                Extraspace Cloud: A cloud where you can <br />
                  <span style={{ color: "#5055cc" }}>
                    Create folders, Upload files and links and can access it
                    from anywhere
                  </span>
                </div>
                <div className="abt-content">
                  Although there are many such applications available on the
                  internet, this application is quite unique when it comes to
                  its features and use-cases. Users can create their account
                  here and start uploading their files, folders and links.
                  <br />
                  The users can use it with the help of their MetaMask wallet
                </div>
                <div
                  className="git-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/srivastavaritik/extraspace-cloud"
                    )}
                >
                  Github Repo
                </div>
              </div>
            </div>
            <div className="features">
              {/* <div className="features-heading">Why Choose Us</div> */}
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 p-3">
                  <div className="feature-top">
                    <img className="feature-img" src={dataSecurity} alt="" />
                    <div className="feature-topic">DATA SECURITY</div>
                  </div>
                  <div className="feature-content">
                    We are now working on making our application decentralized
                    with the help of blockchain to make it secure.
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-3">
                  <div className="feature-top">
                    <img className="feature-img" src={wallet} alt="" />
                    <div className="feature-topic">Crypto Wallet</div>
                  </div>
                  <div className="feature-content">
                    Users will be able to track and store their crypto
                    transaction in our application which will guarantee data
                    security to users.
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-3">
                  <div className="feature-top">
                    <img className="feature-img" src={decentralize} alt="" />
                    <div className="feature-topic">Decentralized</div>
                  </div>
                  <div className="feature-content">
                    Since the application will be decentralized, there is no
                    chance of data breach or privacy/security issues.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
