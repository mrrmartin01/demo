import React from 'react'
import PressPage from './Presspage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Press || Bomba",
    description: "Get updated on the new development by the Bomba App",
  };
const Press = () => {
  return (
    <div>
        <PressPage/>
    </div>
  )
}

export default Press;