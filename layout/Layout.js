import Header from '../components/header/Header';

export default (props) => {
  return (
    <>
      <Header />
      <main> {props.children} </main>
    </>
  );
};
