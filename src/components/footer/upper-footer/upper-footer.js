import React from "react";

import "./upper-footer.css";

const UpperFooter = () => {
  return (
      <div className="upper-footer container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul>
                <li>
                  <span>Адрес:</span> Ташкент.Юнусабадский район
                </li>
                <li>
                  <span>Телефон:</span> +998901743414
                </li>
                <li>
                  <span>Почта:</span> Sardorigamberdiyev1998@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Полезные ссылки</h6>
              <div>
                <ul>
                  <li>
                    <a href="/#">О нас</a>
                  </li>
                  <li>
                    <a href="/#">О нашем магазине</a>
                  </li>
                  <li>
                    <a href="/#">Безопасные покупки</a>
                  </li>
                  <li>
                    <a href="/#">Информация о доставке</a>
                  </li>
                  <li>
                    <a href="/#">Наш Карта сайта</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/#">Кто мы</a>
                  </li>
                  <li>
                    <a href="/#">Наши сервисы</a>
                  </li>
                  <li>
                    <a href="/#">Проектов</a>
                  </li>
                  <li>
                    <a href="/#">Контакт</a>
                  </li>
                  <li>
                    <a href="/#">Отзывы</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <h6>Подпишитесь на нашу рассылку сейчас</h6>
              <p>Получайте по электронной почте обновления о нашем последнем магазине и специальных предложениях.</p>
              <ul>
                <li>
                  <a href="/#"><i className="fa fa-facebook" /></a>
                </li>
                <li>
                  <a href="/#"><i className="fa fa-instagram" /></a>
                </li>
                <li>
                  <a href="https://t.me/Sardor114"><i className="fa fa-send" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
};

export default UpperFooter;