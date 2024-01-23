import { useState } from "react";
import "./NavBar.css";
import cn from "classnames";

export const NavBar = () => {
  const [isActiveBurger, setActiveBurger] = useState(false);
  // const [isActiveNavBar, setActiveNavBar] = useState(false);
  // const [isActiveNavKitchen, setActiveNavKitchen] = useState(false);

  return (
    <nav
      className="navbar nav"
      role="navigation"
      aria-label="main navigation"
      // onBlur={() => setActiveBurger(false)}
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            alt="logo"
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            />
        </a>

        <a
          href="#/"
          role="button"
          className={cn("navbar-burger", "burger", {'is-active' : isActiveBurger})}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setActiveBurger(!isActiveBurger)}
          // onBlur={() => setActiveBurger(false)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={cn("navbar-menu", "burger-menu", { 'is-active': isActiveBurger })}>
        <aside className="menu">
          <p className="menu-label">
            General
          </p>
          <ul className="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
          <p className="menu-label">
            Administration
          </p>
          <ul className="menu-list">
            <li><a>Team Settings</a></li>
            <li>
              <a className="is-active">Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
          <p className="menu-label">
            Transactions
          </p>
          <ul className="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
        <div className="navbar-start" >
          <a href="#/" className="navbar-item">
            Головна
          </a>
          <div className="dropdown is-active">
            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Dropdown button</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a href="#/" className="dropdown-item">
                  Dropdown item
                </a>
                <a href='#/' className="dropdown-item">
                  Other dropdown item
                </a>
                <a href="#/" className="dropdown-item is-active">
                  Active dropdown item
                </a>
                <a href="#/" className="dropdown-item">
                  Other dropdown item
                </a>
                <hr className="dropdown-divider"/>
                  <a href="#/" className="dropdown-item">
                    With a divider
                  </a>
              </div>
            </div>
          </div>
          {/* <div
            className="navbar-item has-dropdown is-hoverable"
          >
            <a
              href="#/"
              className="navbar-link"
            >
            Меню Бар
            </a>
            <div
              className="navbar-dropdown navbar-active"
            >
              <a href="#/" className="navbar-item">
                Щось
              </a>
              <a href="#/" className="navbar-item">
                Щось
              </a>
              <a href="#/" className="navbar-item">
                Щось
              </a>
              <hr className="navbar-divider"/>
                <a href="#/" className="navbar-item">
                Щось
                </a>
              </div>
          </div> */}
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#/" className="navbar-link">
              Меню Кухня
            </a>

            <div className="navbar-dropdown">
              <a href="#/" className="navbar-item">
                About
              </a>
              <a href="#/" className="navbar-item">
                Jobs
              </a>
              <a href="#/" className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider"/>
                <a href="#/" className="navbar-item">
                  Report an issue
                </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="#/" className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a href="#/" className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
    //   <div classNameName="container-fluid">
    //     <a href="#/" className="navbar-brand" href="#/">NavBar</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a href="#/"
    //             className='nav-link active'
    //             aria-current='page'
    //             href="#/"
    //           >
    //           Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="#/" className="nav-link" href="#/">Link</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a href="#/"
    //             className="nav-link dropdown-toggle"
    //             href="#/"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu">
    //             <li><a href="#/" className="dropdown-item" href="#/">Action</a></li>
    //             <li><a href="#/" className="dropdown-item" href="#/">Another action</a></li>
    //             <li>
    //               <hr className="dropdown-divider"/>

    //               </li>
    //             <li><a href="#/" className="dropdown-item" href="#/">Something else here</a></li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a href="#/"
    //             className="nav-link disabled"
    //             aria-disabled="true"
    //             href="#/"
    //           >
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input
    //           className="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //           <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  )
};


