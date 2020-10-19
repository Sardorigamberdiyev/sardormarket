import React from "react";

import "./lower-header.css";
import { Link } from "react-router-dom";

const LowerHeader = (props) => {

  const { categoryProducts } = props;

  return (
      <div className="container-fluid lower-header">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 offset-md-4">
                      <ul>
                          <li onClick={() => categoryProducts("")}>
                              <Link to="/">Все</Link>
                          </li>
                          <li onClick={() => categoryProducts("fruits")}>
                              <Link to="/">Фрукты</Link>
                          </li>
                          <li onClick={() => categoryProducts("vegetables")}>
                              <Link to="/">Овощи</Link>
                          </li>
                          <li onClick={() => categoryProducts("drinks")}>
                              <Link to="/">Напитки</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default LowerHeader;