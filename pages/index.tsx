import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <h1>Main Page</h1>
      <p>Click the link below to navigate to user page.</p>
      <Link href={'/user'}>User Page</Link>
    </>
  )
};

export default Index;
