import classes from './backdrop.module.css';
export default (props) => {
  return <div id={classes.back_drop}>{props.children}</div>;
};
