import { signIn, useSession } from 'next-auth/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SignIn() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push('/dashboard'); // Redirect to dashboard if logged in
  }, [session]);

  return (
    <div>
      {!session && (
        <div>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      )}
    </div>
  );
}


// pages/auth/signin.js
import { signIn } from 'next-auth/client';

export default function SignInPage() {
  return (
    <div>
      <button onClick={() => signIn('credentials', { username: 'user', password: 'pass' })}>
        Sign In
      </button>
    </div>
  );
}
