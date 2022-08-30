import classes from './button.module.css';
export default (props) => {
  return <button className={classes.btn_fill}>{props.children}</button>;
};

export const BtnOutline = (props) => {
  return <button className={classes.btn_outline}>{props.children}</button>;
};
