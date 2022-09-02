import classes from './sectionheading.module.css';
export default (props) => {
  const { title, para } = props;
  return (
    <div className={`container text-center ${classes.heading}`}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.para}>{para}</p>
    </div>
  );
};
