import Link from 'next/link';
import Header from '../components/header/Header';

export default function Home({ data }) {
  console.log(data.length);
  const style = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  };
  return (
    <div>
      <Header />
      <h1>Hello world!</h1>
      {data.map((e, i) => {
        return (
          <div style={style}>
            <p key={i}>{e.name}</p>
            <Link href={`/${e.id}`}>View More</Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return { props: { data } };
}
