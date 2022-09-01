import Link from 'next/link';
import Hero from '../components/hero/Hero';

export default function Home() {
  // console.log(data.length);
  // const style = {
  //   display: 'flex',
  //   alignItems: 'center',
  //   gap: '1.5rem',
  // };
  return (
    <div>
      <h1>Hello world!</h1>
      <Hero />
      {/* {data.map((e, i) => {
        return (
          <div style={style}>
            <p key={i}>{e.name}</p>
            <Link href={`/${e.id}`}>View More</Link>
          </div>
        );
      })} */}
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();
//   return { props: { data } };
// }
