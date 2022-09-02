import classes from './featurecategories.module.css';
import { BtnLg } from '../../UI/Buttons/Button';

import catItems from './FeatureCategoriesItem';

export default () => {
  return (
    <section className="container my-5">
      <div className="row gy-4">
        <div className={`col-lg-4 ${classes.featureCat_info}`}>
          <h2 className={classes.subtitle}>Featured Category</h2>
          <p className={classes.para}>
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>
          <BtnLg>Explore More</BtnLg>
        </div>
        <div className={`col-lg-8 ms-auto ${classes.featureCat_list}`}>
          <div className="row gy-4">
            {catItems.map((e) => {
              return (
                <div className="col-sm-6 col-lg-4 col-12" key={e.id}>
                  <div className={classes.cat_item}>
                    <p>{e.courses_name}</p>
                    <span>{e.total_courses}+ Courses</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
