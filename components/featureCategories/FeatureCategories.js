import classes from './featurecategories.module.css';
import { BtnLg } from '../../UI/Buttons/Button';
export default () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className={`col-xl-4 ${classes.featureCat_info}`}>
          <h2 className={classes.subtitle}>Featured Category</h2>
          <p className={classes.para}>
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>
          <BtnLg>Explore More</BtnLg>
        </div>
        <div className={`col-xl-8 ${classes.featureCat_list}`}></div>
      </div>
    </section>
  );
};
