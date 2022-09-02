import Image from 'next/image';

import { BtnLg, BtnLgRound } from '../../UI/Buttons/Button';
import classes from './hero.module.css';

import { BiChevronRight } from 'react-icons/bi';
import { FiPlay } from 'react-icons/fi';

export default () => {
  return (
    <section className="container">
      <div className="row">
        <div className={`col-xl-6 col-lg-6 ${classes.hero_info}`}>
          <h1 className={classes.hero_title}>
            Free <span>Online</span>&nbsp; <br />
            <span>Courses</span>&nbsp; From <br />
            The Experts
          </h1>
          <p className={classes.hero_para}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros.
          </p>
          <div className={`${classes.info_buttons}`}>
            <BtnLg>
              Reddy Start <BiChevronRight className="btn_icon" />
            </BtnLg>
            <div className={classes.video_btn}>
              <BtnLgRound>
                <FiPlay className="btn_icon ms-1" />
              </BtnLgRound>
              Watch Video
            </div>
          </div>
          {/* <div className={classes.devider}></div> */}
        </div>
        <div
          className={`col-xl-6 col-lg-6 d-flex justify-content-center align-items-center ${classes.hero_image}`}
        >
          <Image
            src="/images/hero_image.svg"
            alt="Hero Image"
            width={580}
            height={580}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
