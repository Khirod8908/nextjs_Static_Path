import { useState } from 'react';
import classes from './dropdown.module.css';
import { BiGlobe } from 'react-icons/bi';
export default function DropDown() {
  const [option, setOption] = useState('EN');
  const [showMenu, setShowMenu] = useState(false);

  const toggleHandle = () => {
    setShowMenu(!showMenu);
  };

  const selectItemHandler = (e) => {
    setOption(e.target.value.slice(-2));
    setShowMenu(false);
  };

  return (
    <div className={classes.dropdown}>
      <p className={`mb-0 ${classes.dropdown__toggle}`} onClick={toggleHandle}>
        {option} <BiGlobe className="icon ms-2" />
      </p>
      <div
        className={`flex-column shadow-lg ${classes.dropdown__menu} ${
          showMenu ? classes.show__menu : ''
        }`}
      >
        <label className={classes.option}>
          <input
            className={classes.input}
            type="radio"
            value="EN"
            name="language"
            checked={option === 'EN'}
            onChange={selectItemHandler}
          />
          English - EN
        </label>
        <label className={classes.option}>
          <input
            className={classes.input}
            type="radio"
            value="GE"
            name="language"
            checked={option === 'GE'}
            onChange={selectItemHandler}
          />
          German - GE
        </label>
        <label className={classes.option}>
          <input
            className={classes.input}
            type="radio"
            value="FR"
            name="language"
            checked={option === 'FR'}
            onChange={selectItemHandler}
          />
          French - FR
        </label>
      </div>
    </div>
  );
}
