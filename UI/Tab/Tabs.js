import classes from './tab.module.css';
const Tabs = ({ active, onChange, children }) => {
  return (
    <>
      <div className={classes.tabs}>
        {children.map((e, index) => (
          <button
            onClick={() => onChange(index)}
            className={active === index ? classes.activeTab : ''}
            key={index}
          >
            {e.props.title}
          </button>
        ))}
      </div>
      <div>{children[active]}</div>
    </>
  );
};

export const Tab = ({ children }) => <>{children}</>;
export default Tabs;
