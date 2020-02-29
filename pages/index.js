import Layout from '../components/MyLayout';
// import withLayout from '../components/MyLayout';

// Method 1 - Layout as a Higher Order Component
// const Page = () => <p>Hello Next.js</p>;

// export default withLayout(Page);

////

// Method 2 - Page content as a prop
const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
  return <Layout content={indexPageContent} />;
}
