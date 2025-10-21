import React from 'react'
import { menu, socialIcons } from '../data'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* left this comment on purpose */}
          <ul className="nav-links" id="nav-links">
            {
              menu.map((item) => {
                const { id, title, link } = item;
                console.log(item);
                return <li key={id}>
                  <a href={link} className="nav-link"> {title} </a>
                </li>
              })
            }
          </ul>

          <ul className="nav-icons">
            {
              socialIcons.map((item) => {
                const { id, icon, link } = item;
                console.log(item);
                return <li key={id}>
                  <a href={link} className="nav-icon"
              ><i className={item.icon}></i></a>
                </li>
              })
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar