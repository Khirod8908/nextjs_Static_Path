export default () => {
  const myFunction = () => {
    console.log(window.history.length);
  };
  return (
    <>
      <h1> Categories page</h1>
      <button onclick={myFunction}>Go Back 2 Pages</button>
    </>
  );
};
