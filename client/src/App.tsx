import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";

import Header from "./components/header";
import SideBar from './components/Sidebar';
import SignUP from './components/SignUP';
import MainPage from './components/MainPage';
import Tasks from './components/tasks'
import { Routes, Route, Link } from "react-router-dom";

const App: FC = () => {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);



    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    if (!store.isAuth) {
        return (
            <div>
                 <Routes>
                    <Route path="/reg" element={<SignUP/>} />
                    <Route path="/" element={<LoginForm/>} />
                </Routes>
            </div>
        );
    }




    // return (
    //     <div>
    //         <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
    //         <h1>{store.user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
    //         <button onClick={() => store.logout()}>Выйти</button>
    //         <div>
    //             <button onClick={getUsers}>Получить пользователей</button>
    //         </div>
    //         {users.map(user =>
    //             <div key={user.email}>{user.email}</div>
    //         )}
    //     </div>
    // );

    return (
        <div>
            <Header/>
            <SideBar/>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/tasks" element={<Tasks/>} />
                {/* <Route path="/reg" element={<SignUP/>} /> */}
                {/* <Route path="/login" element={<LoginForm/>} /> */}
            </Routes>
           
        </div>
    );
};

export default observer(App);
