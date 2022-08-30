export default (props) => {
  const style = {
    width: '100%',
    height: '100%',
    backdroundColor: 'black',
    opacity: '0.5',
  };
  return <div style={style}>{props.children}</div>;
};
