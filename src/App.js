import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home.page';
import { Files } from './pages/Files.page';
import { SignIn } from './pages/SignIn.page';
import { SignUp } from './pages/SignUp.page';
import { Navbar } from './components/Navbar.component';
import { TokenContext } from './context/token.context';

function App() {
    const [userToken, setUserToken] = useState('');

    console.log(userToken);

    return (
        <TokenContext.Provider
            value={{
                userToken,
                setUserToken,
            }}
        >
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
        </TokenContext.Provider>
    );
}

export default App;
