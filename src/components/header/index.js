import React from 'react';
import { connect } from "react-redux";
import './_header.scss';


class Header extends React.Component {
  render() {
    return (
      <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-content">
              <span className="header-logo">
                Front End Auth Demo
              </span>
              <nav className="header-nav">
                <ul className="header-nav-list">
                  <li className="header-nav-list-item">
                    <button type="button" class="btn btn-primary">Register</button>
                  </li>
                  <li className="header-nav-list-item">
                    <button onClick={() => this.props.showAuthModal()} type="button" class="btn btn-primary">Login</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>)
  }
}

const mapDispatchToProps = dispatch => {
  return { showAuthModal: () => dispatch({ type: `SHOW_MODAL` }) }
}

const mapStateToProps = ({ userLogedIn }) => {
  return { userLogedIn }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
