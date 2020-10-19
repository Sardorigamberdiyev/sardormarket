import React, { Component } from "react";

import "./registration.css";

export default class Registration extends Component {

    onSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <form className="registration" onSubmit={this.onSubmit}>
                <div className="container">
                    <h3 className="mb-4">Регистрация</h3>
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-5 offset-lg-0">
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input type="text"
                                       name="user_name"
                                       className="form-control"
                                       id="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="surname">Фамилия</label>
                                <input type="text"
                                       name="user_surname"
                                       className="form-control"
                                       id="surname"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Телефон</label>
                                <input type="number"
                                       name="user_phone"
                                       className="form-control"
                                       id="phone"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Пароль</label>
                                <input type="password"
                                       name="user_password"
                                       className="form-control"
                                       id="password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-password">Подтвердите пороль</label>
                                <input type="password"
                                       className="form-control"
                                       id="re-password"
                                />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox"
                                           className="form-check-input"
                                           id="check"
                                    /> Я согласен с
                                </label>
                                <a href="/#" className="ml-1">Публичной офертой</a>
                            </div>
                            <button className="btn btn-primary mt-3">Зарегистрироваться</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}