// import everything 
import { Route, Routes } from 'react-router-dom'
import Price from './pages/Price'
import Currencies from './pages/Currencies'
import Main from './pages/Main'
import React from 'react'
import Nav from './components/Nav'

const App = () => {
    return <>
    <Nav />
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/price' element={<Price />} />
        <Route path='/price/:symbol' element={<Price />} />
    </Routes>
    </>
}

export default App