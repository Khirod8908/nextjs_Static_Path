import Image from 'next/image';
import classes from './card.module.css';

import { BsStarFill, BsBarChart, BsFileEarmarkText } from 'react-icons/bs';
import { IoMdTime } from 'react-icons/io';

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
      <div className={classes.card_info}>
        <div className={`d-flex align-items-center ${classes.rating}`}>
          <div className="d-flex align-items-center">
            <BsStarFill className="icon" />
            4.8
          </div>
          <div className={classes.devider}></div>
          <span> (1089)</span>
        </div>
        <p>Learn Figma - UI/UX Design Essential Training</p>
        <div className={classes.course_info}>
          <span>
            <BsFileEarmarkText /> 6 lesson
          </span>
          <span>
            <IoMdTime />
            3h 56m
          </span>
          <span>
            <BsBarChart />
            Beginner
          </span>
        </div>
        <div className={classes.price}>
          <span className={classes.dis_price}>$56</span> $48
        </div>
        <div className={classes.creator}>
          <div className={classes.profile_img}>
            
          </div>
          <span>Jose Portila</span>
        </div>
      </div>
    </div>
  );
};
