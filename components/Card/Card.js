import Image from 'next/image';
import classes from './card.module.css';

import { BsStarFill } from 'react-icons/bs';

export default () => {
  return (
    <div className={`col-3 ${classes.card}`}>
      <div className={classes.card_img}>
        <Image
          src="/images/img1.png"
          alt="img_1"
          width={350}
          height={320}
          layout="responsive"
          loading="lazy"
        />
      </div>
      <div className="card_info">
        <div className={classes.rating}>
          <BsStarFill /> 4.8 (1089)
        </div>
        <p>Learn Figma - UI/UX Design Essential Training</p>
        <div className={classes.price}>
          $48 <span className={classes.dis_price}></span>
        </div>
      </div>
    </div>
  );
};
