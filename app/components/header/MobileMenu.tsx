import Link from "next/link";

function MobileMenu({ openMobileMenu, setOpenMobileMenu, styles }: { openMobileMenu: boolean, setOpenMobileMenu: (params: boolean) => void, styles?: any }) {


  return (
    <>
      <div onClick={() => setOpenMobileMenu(false)} className={`${openMobileMenu ? 'left-menu-overley show-overley' : ''}`}></div>
      <div className={`ms-slidebar ${openMobileMenu ? 'sb-style-overlay' : ''}`}>
        <ul className={styles.m_menu}>
          <li>
            <Link href={'/'}>
              Songs
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Charts
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Artists
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Artists
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MobileMenu;
