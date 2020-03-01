import Layout from '../components/MyLayout';
import Link from 'next/link';
// import withLayout from '../components/MyLayout';

// Method 1 - Layout as a Higher Order Component
// const Page = () => <p>Hello Next.js</p>;

// export default withLayout(Page);

////

// Method 2 - Page content as a prop
// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title='Hello Next.js' />
//         <PostLink title='Learn Next.js is awesome' />
//         <PostLink title='Deploy apps with Zeit' />
//       </ul>
//     </Layout>
//   );
// }

const PostLink = props => (
  <li>
    <Link href='/p/[id]' as={`/p/${props.id}`}>
      <a>{props.id} </a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id='hello-nextjs' />
        <PostLink id='learn-nextjs' />
        <PostLink id='deploy-nextjs' />
      </ul>
    </Layout>
  );
}
