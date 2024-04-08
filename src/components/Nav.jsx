import React from "react";
function Nav() {
  return (
    <div className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm px-10 w-full ">
      <div>
        <h1>logo</h1>
      </div>
      <div>
        <h1>OffStore</h1>
      </div>
      <div className="flex gap-3">
        <a href="">About</a>
        <a href="">FAQ</a> 
        </div>
    </div>
  );
}

export default Nav;
