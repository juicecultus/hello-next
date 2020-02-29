import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href='/about'>
        <a>About Us</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
}
