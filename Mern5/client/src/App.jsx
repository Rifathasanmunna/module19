// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import ReadPage from "./pages/ReadPage.jsx";






const App = () => {
    return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<ReadPage/>}/>
        <Route path="/Create" element={<CreatePage/>}/>
        <Route path="/Read" element={<ReadPage/>}/>
    </Routes>
</BrowserRouter>
    );
};

export default App;