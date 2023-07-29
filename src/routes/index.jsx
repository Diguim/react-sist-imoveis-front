import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Imobi from "../pages/Imobi";
import Error from "../pages/Error";
import Perfil from '../pages/Perfil';
import PrivateRoute from '../components/PrivateRoute';


export default function RouterApp(){

    return(
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/cadastro' element={<Cadastro/>} />
                <Route exact path='/imovel/:slug' element={<Imobi/>} />
                <Route exact path='/perfil' element={
                    <PrivateRoute>
                        <Perfil/>
                    </PrivateRoute>
                } />
                <Route path='*' element={<Error/>} />
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}