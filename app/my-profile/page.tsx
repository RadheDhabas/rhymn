import styles from './page.module.css'
import ProfileHeader from '../components/my-profile/ProfileHeader'
import ProfileStats from '../components/my-profile/ProfileStats'
import Contribution from '../components/my-profile/Contribution'

function page() {
  return (
    <>
      <ProfileHeader styles={styles} />
      <ProfileStats styles = {styles} />
      <Contribution styles = {styles} />
    </>
  )
}

export default page
