import styles from './page.module.css'
import ProfileHeader from '../components/my-profile/ProfileHeader'
import ProfileStats from '../components/my-profile/ProfileStats'
import Contribution from '../components/my-profile/Contribution'
import { auth } from '@/auth'

async function page() {
   const session = await auth();
  return (
    <>
      <ProfileHeader styles={styles} session = {session} />
      <ProfileStats styles = {styles} />
      <Contribution styles = {styles} />
    </>
  )
}

export default page
