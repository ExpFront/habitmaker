import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Tasks: FC = () => {

    return (
        <div>
            <main id="main" className="main">
            <h1>Привет тут будут задачи</h1>
            </main>
        </div>
    );
};

export default observer(Tasks);
