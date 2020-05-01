import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/header';
import Home from 'components/home';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
