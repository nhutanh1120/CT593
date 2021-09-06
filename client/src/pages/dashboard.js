import React from "react";
import Sidebar from "./../components/dashboard/sidebar";
import "./../assets/css/dashboard.css";

function Dashboard() {
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <section className="home-section">
        <div className="text">Dashboard</div>
      </section>
    </>
  );
}

export default Dashboard;
