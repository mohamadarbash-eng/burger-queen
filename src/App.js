import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/checkout/checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from 'react-redux';
import * as actions from "./store/actions";

class App extends Component {
    componentDidMount() {
        this.props.onIsUserAuthenticated();
    }

    render () {
    return (
      <div>
        <Layout>
            <Switch>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/" component={BurgerBuilder}/>
            </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onIsUserAuthenticated: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
