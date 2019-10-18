import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home.page';
import { Files } from './pages/Files.page';
import { SignIn } from './pages/SignIn.page';
import { SignUp } from './pages/SignUp.page';
import { Navbar } from './components/Navbar.component';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/files" component={Files}></Route>
                    <Route path="/signin" component={SignIn}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
