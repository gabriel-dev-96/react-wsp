import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import { SocketContext, socket } from "./context/socket";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import Content from "./components/layouts/Content";
import Home from "./views/Home"
import WhatsApp2 from './views/WhatsApp'

const App = () => {
  const user = true;
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <Provider store={store}>
          <SocketContext.Provider value={socket}>
            <Router>
              <Content>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route exact path="/WhatsApp/:phone" component={WhatsApp2} />
                </Switch>
              </Content>
            </Router>
          </SocketContext.Provider>
        </Provider>
      )}
    </>
  );
};

export default App;
