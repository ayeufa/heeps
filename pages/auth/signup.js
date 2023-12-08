import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement sign-up logic here
    console.log('User Info:', userInfo);
    // Redirect to sign-in page after successful sign-up
    router.push('/auth/signin');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={userInfo.username}
        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
