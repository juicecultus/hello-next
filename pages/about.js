import Layout from '../components/MyLayout';
// import withLayout from '../components/MyLayout';

// Method 1 - Layout as a Higher Order Component
// const Page = () => <p>This is the about page</p>;

// export default withLayout(Page);

////

// Method 2 - Page content as a prop
const aboutPageContent = <p>This is the about page</p>;

export default function About() {
  return <Layout content={aboutPageContent} />;
}
