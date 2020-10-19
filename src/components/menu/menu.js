import React from "react";

import "./menu.css";

const Menu = () => {
  return (
      <div className="menu container-fluid">
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <ul>
                          <li>Фрукты</li>
                          <li>Овощи</li>
                          <li>Напитки</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Menu;