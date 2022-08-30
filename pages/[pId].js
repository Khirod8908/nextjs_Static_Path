// import Link from 'next/link';
export default function Home() {
  // console.log(data);
  return (
    <div>
      {/* <Link href="/">Back</Link>
      <hr />
      <p>{data.name}</p> */}
    </div>
  );
}

// const fetchURL = 'https://jsonplaceholder.typicode.com/users';

// export async function getStaticPaths() {
//   const res = await fetch(fetchURL);
//   const data = await res.json();
//   const paths = data.map((item) => ({
//     params: { pId: item.id.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const productId = context.params.pId;
//   const res = await fetch(`${fetchURL}/${productId}`);
//   const data = await res.json();
//   return { props: { data } };
// }
