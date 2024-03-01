import { Metadata } from 'next'
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Welcome : KeyFrog\'s List',
}

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <h1>Welcome to KeyFrog's Lists!</h1>
    </main>
  );
}