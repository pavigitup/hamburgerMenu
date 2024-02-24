import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="header-con">
    <div>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="web-logo"
        />
      </Link>
    </div>
    <div className="menu">
      <Popup
        modal
        trigger={
          <div>
            <button type="button" data-testid="hamburgerIconButton">
              <GiHamburgerMenu className="menu-icon" /> &times;
            </button>
          </div>
        }
        overlayStyle={overlayStyles}
        closeOnDocumentClick
      >
        {close => (
          <div className="modal">
            <button
              type="button"
              className="close"
              onClick={close}
              data-testid="closeButton"
            >
              <IoMdClose /> &times;
            </button>
            <ul className="link-con">
              <li>
                <Link to="/">
                  <AiFillHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsInfoCircleFill />
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header

/* <div className="popup-container">
   <Popup
     modal
     trigger={
       <button type="button" className="trigger-button">
         Trigger
       </button>
     }
   >
     {close => (
       <>
         <div>
           <p>React is a popular and widely used programming language</p>
         </div>
         <button
           type="button"
           className="trigger-button"
           onClick={() => close()}
         >
           Close
         </button>
       </>
     )}
   </Popup>
 </div> */
