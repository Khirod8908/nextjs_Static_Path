import classes from './header.module.css';
import Link from 'next/link';
import { useState } from 'react';

import { BiSearch, BiMenu, BiX } from 'react-icons/bi';
import Button, { BtnOutline } from '../../UI/Buttons/Button';
import DropDown from '../dropdown/Dropdown';
import SearchBox from '../searchbox/SearchBox';

export default () => {
  const [searchBox, showSearchBox] = useState(false);
  const showSearchBoxHandler = () => {
    return showSearchBox(true);
  };

  const showMenuHandler = () => {
    let menu = document.querySelector('.show_menu');
    let overlay = document.querySelector('.overlay');
    menu.style.left = '0';
    overlay.style.display = 'block';
  };

  const closeMenuHandler = () => {
    let menu = document.querySelector('.show_menu');
    let overlay = document.querySelector('.overlay');
    menu.style.left = '-100%';
    overlay.style.display = 'none';
  };

  return (
    <>
      <header className={`container ${classes.header}`}>
        <nav className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src="/images/Logo-1.svg" alt="EDUCARE" />
          </div>

          <div className={`overlay ${classes.navbar}`}>
            <ul
              className={`d-flex align-items-center mb-0 show_menu ${classes.nav_links}`}
            >
              <Link href="/">Home</Link>
              <Link href="/">Categories</Link>
              <Link href="/">About Us</Link>
              <Link href="/">Contact Us</Link>
              <BiX
                className={`icon p-0 ${classes.close_menu}`}
                onClick={closeMenuHandler}
              />
            </ul>
          </div>

          <div className={`d-flex align-items-center ${classes.icon_button}`}>
            <div className="d-flex align-items-center icons">
              <BiSearch
                className={`icon me-5 ${classes.search}`}
                onClick={showSearchBoxHandler}
              />
              <DropDown />
            </div>
            <div className={classes.devider}></div>
            <div className={`d-flex align-items-center ${classes.buttons}`}>
              <BtnOutline>Log in</BtnOutline>
              <Button>Sign up</Button>
            </div>
            <BiMenu
              className={`icon ${classes.menu_icon}`}
              onClick={showMenuHandler}
            />
          </div>
        </nav>
      </header>
      {searchBox ? <SearchBox /> : null}
    </>
  );
};
