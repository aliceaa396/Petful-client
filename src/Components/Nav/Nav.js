import React from 'react'
import ButtonToggle from './Button';
import './Nav.css';

export default function Nav(props) {
  return (
    <div>
      <header className="nav-bar">
        <nav className="nav-bar-menu">
          <div className="toggle-nav-btn">
            <ButtonToggle click={props.drawerClickHandler}/>
          </div>

          <div className="nav-bar-logo">
            PETFUL
          </div>

          <div className="space"></div>

          <div className="nav-bar-items"> 
            <ul>
              <li>
                <a href="/">
                  Home |
                </a>
              </li>
              <li>
                <a href="/cats">
                  Adopt a Cat |
                </a>
              </li>
              <li>
                <a href="/dogs">
                  Adopt a Dog
                </a>
              </li>
            </ul>
          </div>

        </nav>
      </header>
    </div>
  )
}
