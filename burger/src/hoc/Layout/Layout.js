import React, { Component } from "react";

import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  drawerToggleClickedHandler = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <div>
          {" "}
          <Toolbar drawerToggleClicked={this.drawerToggleClickedHandler}/>
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerCloseHandler}
          />
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
