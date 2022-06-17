import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { load, load_start, load_failed } from './redux-store/actions';

import Header from './components/Header';
import List from './components/List';
import DetailsPage from './components/DetailsPage';
import ErrorPage from './components/ErrorPage';
import './App.css';
import fake from './assets/fake-data.json';
import NotFound from './components/NotFound';
const API_URL = 'https://api.jsonbin.io/b/6231abada703bb67492d2b8f'; // devocean url
// const API_URL = 'https://jsonplaceholder.typicode.com/comments'; // Free fake API

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        (async function (url) {
            dispatch(load_start());
            try {
                const data = await fetch(url);
                const json = await data.json();

                if (json.success === false) {
                    dispatch(load_failed(json));

                    // ****** "API Requests Quota is Exhausted. ******
                    // Purchase more requests at https://jsonbin.io/pricing."
                    // Add fake data
                    dispatch(load(fake));
                } else dispatch(load(json));
            } catch (error) {
                dispatch(load_failed(error));
                console.log('fetch api error ->>>>>', error);
            }
        })(API_URL);
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/'>
                        <Route index element={<List />} />
                        <Route path='details/:id' element={<DetailsPage />} />
                        <Route path='error_page' element={<ErrorPage />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
