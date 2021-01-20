import React from 'react';
import {BaseLayout} from './layout'
import {Switch, Route, useHistory, Redirect} from 'react-router-dom'
import {Home} from "./pages/home";
import {MovieDetails} from "./pages";
import './App.css';


// todo show error handler for react components
// todo notifications

function App()  {
    const history = useHistory();
    return (
        <BaseLayout>
            <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>

                <Route path='/movie/:id'>
                    <MovieDetails/>
                </Route>


                    {/*<Redirect to='/'/>*/}


                <Route>
                    <h1>PAGE NOT FOUND
                        <button onClick={() => history.push('/')}>
                            go home
                        </button>
                    </h1>
                </Route>
            </Switch>
        </BaseLayout>
    );
}

export default App;