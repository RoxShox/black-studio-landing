import React from "react"
import { ourServices } from "../../../constants"
import Typography from "../../elements/Typography/Typography"

import styles from "./OurServices.module.scss"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import OurSeviceItem from "./OurSevicesItem"
const OurServices = () => {
	return (
		<section className={styles.services}>
			<div className={` container ${styles.services__container}`}>
				<div>
					<Typography variant="text" className={styles.services__subtitle}>
						/услуги
					</Typography>
					<div className={styles.services__text_wrap}>
						<Typography variant="h2" className={styles.services__title}>
							МЫ ПРЕДЛАГАЕМ
						</Typography>
						<Typography variant="text" className={styles.services__descr}>
							Наша команда осуществляет полный спектр услуг по созданию сайта на
							Тильде
						</Typography>
					</div>
				</div>
				<div>
					{ourServices.map((item) => (
						<OurSeviceItem key={item.id} item={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default OurServices
