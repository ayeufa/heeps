import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/"><a>Home</a></Link>
      <Link href="/dashboard"><a>Dashboard</a></Link>
      <Link href="/profile"><a>Profile</a></Link>
      <Link href="/marketing/campaigns"><a>Campaigns</a></Link>
      <Link href="/marketing/emailTemplates"><a>Email Templates</a></Link>
      <Link href="/leads"><a>Leads</a></Link>
      <Link href="/settings"><a>Settings</a></Link>
      {/* Add other navigation links as needed */}
    </nav>
  );
}
