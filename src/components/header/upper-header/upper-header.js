import React from "react";
import { Link } from "react-router-dom";

import "./upper-header.css";

const UpperHeader = () => {
    return (
        <div className="container-fluid upper-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 pl-0">
                        <ul>
                            <li>
                                <Link to="/#">Магазины</Link>
                            </li>
                            <li>
                                <Link to="/#">Расрочка</Link>
                            </li>
                            <li>
                                <Link to="/#">Оплата</Link>
                            </li>
                            <li>
                                <Link to="/#">Доставка</Link>
                            </li>
                            <li>
                                <Link to="/#">Услуги</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 offset-md-4">
                        <div className="row">
                            <div className="col-md-3 pl-0 pr-0">
                                <div className="select">
                                    <select name="language">
                                        <option value="uzb">O'zbekcha</option>
                                        <option value="ru">Русский</option>
                                        <option value="eu">English</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-9 pr-0">
                                <i className="fa fa-phone" />
                                <span>+998 (90) 174-34-14</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UpperHeader;