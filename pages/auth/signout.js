import { signOut, useSession } from 'next-auth/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SignOut() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.push('/auth/signin'); // Redirect to sign-in if not logged in
  }, [session]);

  useEffect(() => {
    signOut({ redirect: false });
  }, []);

  return (
    <div>
      <p>Signing you out...</p>
    </div>
  );
}
