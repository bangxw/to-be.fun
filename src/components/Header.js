import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href="/password-generator" className="capitalize">
        Password generator
      </Link>
    </header>
  );
}
