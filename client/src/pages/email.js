import React from "react";
import Sidebar from "./../components/dashboard/sidebar/sidebar";
import ScrollTop from "../components/scrollTop/scrollTop";
import EmailBody from "../components/dashboard/body/email/email";
import TopNavbar from "../components/dashboard/navbar/navbar";

function Email() {
  return (
    <div className="App">
      <Sidebar />
      <section className="home-section">
        <TopNavbar />
        <div className="grid body">
          <h2 className="dashboard--body">Send mail</h2>
          <div className="row">
            <div className="col l-12">
              <EmailBody />
            </div>
          </div>
        </div>
      </section>
      <ScrollTop />
    </div>
  );
}

export default Email;
