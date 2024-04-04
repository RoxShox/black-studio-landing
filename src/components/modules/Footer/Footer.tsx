import { useContext } from "react"

import { ModalContext } from "../../../providers/GameProviders"

import Typography from "../../elements/Typography/Typography"
import IconLink from "../../elements/IconLink/Link"

import iconTg from "../../../assets/img/footer-icon-vk.png"
import iconVk from "../../../assets/img/footer-icon-tg.png"
import iconT from "../../../assets/img/footer-icon-t.png"

import styles from "./Footer.module.scss"
import FooterInfo from "./FooterInfo"

const Footer = () => {
	const { handleModalOpen } = useContext(ModalContext)
	return (
		<footer className={styles.footer}>
			<div className="container">
				<Typography className={styles.footer__title} variant="h2">
					СОЗДАДИМ ПРОЕКТ КОТОРЫЙ ВАС ВЫДЕЛИТ
				</Typography>
				<div className={styles.footer__content}>
					<div className={styles.footer__links}>
						<IconLink
							alt="Telegram"
							classname={styles.footer__link}
							src={iconTg}
						/>
						<IconLink
							alt="Vkontakte"
							classname={styles.footer__link}
							src={iconVk}
						/>
						<IconLink alt="T" classname={styles.footer__link} src={iconT} />
					</div>
					<button className={styles.footer__btn_big} onClick={handleModalOpen}>
						заказать проект
					</button>

					<FooterInfo />
				</div>
			</div>
		</footer>
	)
}

export default Footer
