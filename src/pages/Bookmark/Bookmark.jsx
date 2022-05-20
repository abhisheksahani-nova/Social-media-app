import React from "react";
import { Navbar, Sidebar, FollowContainer } from "../../components/index";

function Bookmark() {
  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />
        <div>
          <div className="d-flex flex-direction gap-1 "></div>
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default Bookmark;
