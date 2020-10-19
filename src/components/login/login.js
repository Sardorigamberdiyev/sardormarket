import React from "react";

import "./login.css";

const Login = () => {
  return (
      <div className="login container">
          <div className="row">
              <div className="col-12 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-5 offset-lg-0">
                  <h3 className="mb-4">Войти</h3>
                  <div className="form-group">
                      <label htmlFor="phone">Телефон</label>
                      <input type="number" className="form-control" id="phone" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Пароль</label>
                      <input type="password" className="form-control" id="password" />
                  </div>
                  <button className="btn btn-primary">Войти</button>
              </div>
          </div>
      </div>
  )
};

export default Login;