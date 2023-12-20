'use client'

import { useEffect } from 'react';
import Login from "../components/Login/Login.js";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = false;
    if (loggedIn === false) {
      router.push('/create')
    }
  }, [])

  return (
    <div>
      <Login />
    </div>
  )
}
