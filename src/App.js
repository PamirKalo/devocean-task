import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { load } from './redux-store/actions';
import { load_start } from './redux-store/actions';
import { load_failed } from './redux-store/actions';

import Header from './components/Header';
import List from './components/List';
import DetailsPage from './components/DetailsPage';
import ErrorPage from './components/ErrorPage';
import './App.css';
import fake from './assets/fake-data.json';
const API_URL = 'https://api.jsonbin.io/b/6231abada703bb67492d2b8f';

function App() {
    const dispatch = useDispatch();
    const fetchData = async () => {
        dispatch(load_start());
        try {
            const data = await fetch(API_URL);
            const json = await data.json();

            if (json.success === false) {
                // dispatch(load_failed(json));

                // ****** "API Requests Quota is Exhausted. ******
                // Purchase more requests at https://jsonbin.io/pricing."
                // Add fake data
                dispatch(load(fake));
            } else dispatch(load(json));
        } catch (error) {
            dispatch(load_failed(error));
            console.log('error in app.js->>>>>', error);
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
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
