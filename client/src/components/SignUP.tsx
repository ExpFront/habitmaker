import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Link } from "react-router-dom";

const SignUP: FC = () => {

  const [username, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [nik, setNik] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {store} = useContext(Context);

    return (
        <div>



  <main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src="assets/img/logo.png" alt="" />
                  <span className="d-none d-lg-block">Habitmaker</span>
                </a>
              </div>
              {/* End Logo */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Регистрация акаунта
                    </h5>
                    <p className="text-center small">
                      Заполните форму и завершите регистрацию
                    </p>
                  </div>
                  <div className="row g-3 needs-validation">
                    <div className="col-12">
                      <label htmlFor="yourName" className="form-label">
                        Имя
                      </label>
                      <input
                       onChange={e => setName(e.target.value)}
                       value={username}
                        type="text"
                        name="name"
                        className="form-control"
                        id="yourName"

                      />
                      <div className="invalid-feedback">
                        Пожалуйста, введите ваше имя!
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourEmail" className="form-label">
                        Почта
                      </label>
                     
                      <input
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      placeholder='Email'
                        type="email"
                        name="email"
                        className="form-control"
                        id="yourEmail"

                      />
                      <div className="invalid-feedback">
                        Пожалуйста, введите ваш Email!
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourEmail" className="form-label">
                        Телефон
                      </label>
                      <input
                       onChange={e => setPhone(e.target.value)}
                       value={phone}
                        type="text"
                        name="phone"
                        className="form-control"
                        id="yourPhone"

                      />
                      <div className="invalid-feedback">
                        Пожалуйста, введите ваш телефон!
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">
                        Ник
                      </label>
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                        <input
                         onChange={e => setNik(e.target.value)}
                         value={nik}
                          type="text"
                          name="nik"
                          className="form-control"
                          id="yourNik"

                        />
                        <div className="invalid-feedback">
                          введите ваш уникальный ник
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Пароль
                      </label>
                      <input
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      placeholder='Пароль'
                        name="password"
                        className="form-control"
                        id="yourPassword"

                      />
                      <div className="invalid-feedback">
                        Пожалуйста, введите пароль!
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="terms"
                          type="checkbox"
                          defaultValue=""
                          id="acceptTerms"

                        />
                        <label
                          className="form-check-label"
                          htmlFor="acceptTerms"
                        >
                          I agree and accept the{" "}
                          <a href="#">terms and conditions</a>
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button 
                      className="btn btn-primary w-100" 
                      type="submit"
                      onClick={() => store.registration(username, email, phone, nik, password)}>
                        Зарегистрироваться
                      </button>
                     
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Есть уже аккаунт? <Link to="/">Войти</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  {/* End #main */}

            
        </div>
    );
};

export default observer(SignUP);
