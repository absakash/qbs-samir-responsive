import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import HeaderTwo from '../../Components/Header/HeaderTwo';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <HeaderTwo></HeaderTwo>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;