import classes from './header.module.css';
import Link from 'next/link';
export default () => {
  return (
    <header className={`container-fluid ${classes.header}`}>
      <nav className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <img src="/images/Logo.svg" alt="EDUCARE" />
        </div>
        <ul className={`d-flex align-items-center mb-0 ${classes.nav_links}`}>
          <Link href="/">Home</Link>
          <li>Categories</li>
          <Link href="/">About Us</Link>
          <Link href="/">Contact Us</Link>
        </ul>
        <div className="icon">icons</div>
      </nav>
    </header>
  );
};
