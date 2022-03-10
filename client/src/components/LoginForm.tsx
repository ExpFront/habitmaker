import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Link } from "react-router-dom";

const LoginForm: FC = () => {
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
                  <span className="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div>
              {/* End Logo */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Войдите в свой аккаунт 
                    </h5>
                    <p className="text-center small">
                        Введите логин и пароль для авторизации
                    </p>
                  </div>
                  <div className="row g-3 needs-validation">


                    {/* <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">
                        Логин
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
                         placeholder='Логин'
                          name="nik"
                          className="form-control"
                          id="yourUsername"
                        />
                        <div className="invalid-feedback">
                          Пожалуйста введите логин
                        </div>
                      </div>
                    </div> */}


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
                        Пожалуйста введите пароль!
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          defaultValue="true"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          Запомнить меня
                        </label>
                      </div>
                    </div>
                    <div className="col-12">

                      <button onClick={() => store.login(email, password)} className="btn btn-primary w-100" type="submit">
                        Войти
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Нету аккаунта?{" "}
                        <Link to="/reg">Регистрация</Link>
                      </p>
                    </div>
                  </div>
                </div>
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

export default observer(LoginForm);
