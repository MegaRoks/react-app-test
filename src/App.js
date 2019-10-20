import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home.page';
import { Files } from './pages/Files.page';
import { SignIn } from './pages/SignIn.page';
import { SignUp } from './pages/SignUp.page';
import { Navbar } from './components/Navbar.component';
import { File } from './pages/File.page';
import { AuthedContext } from './context/authed.context';

function App() {
    const [authed, setAuthed] = useState();

    useEffect(() => {
        const authed = localStorage.getItem('authed') || false;
        setAuthed(authed);
    }, []);

    useEffect(() => {
        localStorage.setItem('authed', authed);
    }, [authed]);

    return (
        <AuthedContext.Provider value={{ authed, setAuthed }}>
            <BrowserRouter>
                <Navbar />
                <div className="container pt-4">
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/files" component={Files}></Route>
                        <Route path="/signin" component={SignIn}></Route>
                        <Route path="/signup" component={SignUp}></Route>
                        <Route path="/:url_code" component={File}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </AuthedContext.Provider>
    );
}

export default App;
