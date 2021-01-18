import React from 'react';
import {BaseLayout} from './layout'
import {Home} from "./pages";
import './App.css';

// todo show error handler for react components
// todo notifications

function App()  {

    return (
        <BaseLayout>
            <Home/>
        </BaseLayout>
    );
}

export default App;