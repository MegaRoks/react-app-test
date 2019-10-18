import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home.page';
import { Files } from './pages/Files.page';
import { SingIn } from './pages/SingIn.page';
import { SingUp } from './pages/SingUp.page';
import { Navbar } from './components/Navbar.component';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/files" component={Files}></Route>
                    <Route path="/singin" component={SingIn}></Route>
                    <Route path="/singup" component={SingUp}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
