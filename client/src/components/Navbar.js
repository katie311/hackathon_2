import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Button, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import Yuscared from '../Yuscared.png';
import scared from '../scared.png';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/Liked'>
            <img src={scared} style={sQur}></img>
            <Menu.Item
              id="liked"
              active={this.props.location.pathname === '/Liked'}
            />
          </Link>
          <Link to='/newvideo'>
            {/* <img src={scared} style={sQur}></img> */}
            <Menu.Item
              name='New Video'
              id="liked"
              active={this.props.location.pathname === '/newvideo'}
            />
          </Link>
          
            <center>
              <Menu.Item
                name='Logout'
                onClick={() => handleLogout(this.props.history)}
              />
            </center>
        </Menu.Menu>

      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <img style={height} src={Yuscared}></img>
            <Menu.Item
              id='home'
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    );
  };
};

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    );
  };
};

const height = {
  height: '65px',
  paddingLeft: '50px',
  paddingTop: '20px',
  width: '200px'
}

const sQur = {
  height: '50px',
  borderRadius: '50px',
}

const btn = {
  height: '50px',
  width: '150px',
  color: 'white',
  // paddingTop: '20px',
}

export default withRouter(ConnectedNavbar);
