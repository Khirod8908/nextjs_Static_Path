import classes from './header.module.css';
import Link from 'next/link';

import { BiSearch, BiGlobe } from 'react-icons/bi';
import Button, { BtnOutline } from '../../UI/Buttons/Button';
import DropDown from '../dropdown/Dropdown';

export default () => {
  return (
    <header className={`container-fluid ${classes.header}`}>
      <nav className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <img src="/images/Logo-1.svg" alt="EDUCARE" />
        </div>
        <ul className={`d-flex align-items-center mb-0 ${classes.nav_links}`}>
          <Link href="/">Home</Link>
          <li>Categories</li>
          <Link href="/">About Us</Link>
          <Link href="/">Contact Us</Link>
        </ul>
        <div className={`d-flex align-items-center ${classes.icon_button}`}>
          <div className="d-flex align-items-center icons">
            <BiSearch className={`icon me-5 ${classes.search}`} />
            <DropDown />
          </div>
          <div className={classes.devider}></div>
          <div className="d-flex align-items-center buttons">
            <BtnOutline>Log in</BtnOutline>
            <Button>Sign up</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
