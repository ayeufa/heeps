// pages/index.js
import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Welcome to Our CRM</h1>
        <p className="my-4">Manage your marketing campaigns effectively.</p>
        <Link href="/auth/signup">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </a>
        </Link>
      </div>
    </Layout>
  );
}
