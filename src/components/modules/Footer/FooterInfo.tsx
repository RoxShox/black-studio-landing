import { useContext } from "react"

import { ModalContext } from "../../../providers/GameProviders"

import Typography from "../../elements/Typography/Typography"

import styles from "./Footer.module.scss"

const FooterInfo = () => {
	const { handleModalOpen } = useContext(ModalContext)

	return (
		<div className={styles.footer__info}>
			<div className={styles.footer__info_wrap}>
				<div className={styles.footer__info__nums}>
					<a className={styles.footer__info__num} href="">
						+7 (952) 696 66-52
					</a>
					<a className={styles.footer__info__num} href="">
						+7 (912) 259 43-07
					</a>
				</div>
				<Typography variant="text" className={styles.footer__info__schedule}>
					Мы на связи ПН-СБ <br />с 9:00 до 20:00 часов по Москве
				</Typography>
			</div>

			<button className={styles.footer__info__btn} onClick={handleModalOpen}>
				заказать обратный звонок
			</button>
		</div>
	)
}

export default FooterInfo
