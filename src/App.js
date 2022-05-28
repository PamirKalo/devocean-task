import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {load} from './redux-store/actions';
import Header from './components/Header';
import List from './components/List';
import Details from './components/Deatails';
import fake from './assets/fake-data.json';
const API_URL = 'https://api.jsonbin.io/b/6231abada703bb67492d2b8f';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // const data = await fetch(API_URL);
            // const json = await data.json();

            // Add fake data, because of exhausted API
            const json = fake;
            dispatch(load(json));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <BrowserRouter>
            <Header />
            <div className='App'>Devocean-task</div>
            <Routes>
                <Route path='/' element={<List />} />
                <Route path='/details/:id' element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
