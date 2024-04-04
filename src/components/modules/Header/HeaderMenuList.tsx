import React from "react"
import styles from "./Header.module.scss"
import { headerMenuLink } from "../../../constants"
const HeaderMenuList = () => {
	return (
		<nav>
			<ul className={styles.header__menu_list}>
				{headerMenuLink.map((link) => (
					<li key={link.id} className={styles.header__menu_item}>
						<a className={styles.header__menu_link} href="">
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default HeaderMenuList
