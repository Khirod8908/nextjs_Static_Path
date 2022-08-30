export default (props) => {
  const style = {
    width: '100vw',
    height: '100vh',
    backdroundColor: 'white',
  };
  return <div style={style}>{props.children}</div>;
};
