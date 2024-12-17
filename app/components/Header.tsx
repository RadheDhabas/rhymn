import React from 'react'
import { isMobileDevice } from '../actions/mobileActions'
import HeaderMenu from './header/HeaderMenu';
import { auth } from '@/auth';

async function Header() {
    const isMobile = await isMobileDevice();
    const session = await auth();
  return (
    <HeaderMenu isMobile={isMobile} session ={session}/>
  )
}

export default Header
