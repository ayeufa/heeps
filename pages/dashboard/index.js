import { useSession, signOut } from 'next-auth/client';

export default function Dashboard() {
  const [session, loading] = useSession();

  if (loading) return <p>Loading...</p>;
  if (!session) return <p>Access Denied</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
