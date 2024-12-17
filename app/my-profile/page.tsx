import styles from './page.module.css'
import ProfileHeader from '../components/my-profile/ProfileHeader'
import ProfileStats from '../components/my-profile/ProfileStats'

function page() {
  return (
    <>
      <ProfileHeader styles={styles} />
      <ProfileStats styles = {styles} />
    </>
  )
}

export default page
