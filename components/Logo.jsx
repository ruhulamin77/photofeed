import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="flex items-center text-3xl font-extrabold font-roboto">
        <span className="text-blue-500">Photo</span>
        <span className="text-yellow-500">Feed</span>
      </h1>
    </Link>
  );
};

export default Logo;
