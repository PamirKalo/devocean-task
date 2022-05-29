import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { load } from './redux-store/actions';
import { load_start } from './redux-store/actions';

import Header from './components/Header';
import List from './components/List';
import DetailsPage from './components/DetailsPage';
// import FetchData from './fetch';
import fake from './assets/fake-data.json';

function App() {
    const dispatch = useDispatch();
    const fetchData = async () => {
        // const API_URL = 'https://api.jsonbin.io/b/6231abada703bb67492d2b8f';
        const test_api = 'https://jsonplaceholder.typicode.com/users'; // free test api
        dispatch(load_start());
        try {
            // const data = await fetch(API_URL);
            // const data = await fetch(test_api);
            // const json = await data.json();
            setTimeout(() => {
                dispatch(load(fake));
            }, 1000);

            // dispatch(load(json));
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
            <div className='App'>Devocean-task</div>
            <main>
                <Routes>
                    <Route path='/' element={<List />} />
                    <Route path='/details/:id' element={<DetailsPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
