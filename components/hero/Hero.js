import classes from './hero.module.css';
export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-xl-6 ${classes.hero_info}`}>
          <h1 className={classes.hero_title}>
            Free <span> Online</span>
            <span>Courses</span> From The Experts            
          </h1>
        </div>
        <div className="col-xl-6">2</div>
      </div>
    </div>
  );
};
