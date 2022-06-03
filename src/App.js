import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { load } from './redux-store/actions';
import { load_start } from './redux-store/actions';

import Header from './components/Header';
import List from './components/List';
import DetailsPage from './components/DetailsPage';
import './App.css';
import fake from './assets/fake-data.json';
const API_URL = 'https://api.jsonbin.io/b/6231abada703bb67492d2b8f';

function App() {
    const dispatch = useDispatch();
    const fetchData = async () => {
        dispatch(load_start());
        try {
            // const data = await fetch(API_URL);
            // const data = await fetch(test_api);
            // const json = await data.json();
            // dispatch(load(json));

            // ****** "API Requests Quota is Exhausted. ******
            // Purchase more requests at https://jsonbin.io/pricing."
            setTimeout(() => {
                dispatch(load(fake));
            }, 1000);
        } catch (error) {
            return error;
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<List />} />
                    <Route path='/details/:id' element={<DetailsPage />} />
                    <Route path='*' element={"Missing data"} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
