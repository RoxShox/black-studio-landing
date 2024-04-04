import { useMediaQuery } from "../../../hooks/useMediaQuery"
import { useState } from "react"

import MobileNavbar from "./MobileNavbar"
import IconLink from "../../elements/IconLink/Link"
import HeaderMenuList from "./HeaderMenuList"

import tgIcon from "../../../assets/img/sm-tg.svg"
import whatsappIcon from "../../../assets/img/sm-whatsapp.svg"
import logo from "../../../assets/img/logo.svg"

import styles from "./Header.module.scss"

const Header = () => {
	const [mobileMenuActive, setMobileMenuActive] = useState(false)

	const isMedia768 = useMediaQuery(768)

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__inner}>
					<div className={styles.header__logo_wrap}>
						<a href="#">
							<img className="logo__img" src={logo} alt="Main Logo" />
						</a>
						{isMedia768 && (
							<button
								className={styles.header__burger_menu}
								onClick={() => setMobileMenuActive(!mobileMenuActive)}
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
						)}
					</div>
					<div className={styles.header__menu_wrap}>
						<MobileNavbar
							activeMenu={mobileMenuActive}
							setActiveMenu={setMobileMenuActive}
						/>
						{!isMedia768 && <HeaderMenuList />}
						<div className={styles.header__links_wrap}>
							<IconLink alt="tgIcon" src={tgIcon} />
							<IconLink alt="whatsappIcon" src={whatsappIcon} />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
