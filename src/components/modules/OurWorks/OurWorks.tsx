import { ourWorksSites } from "../../../constants"
import styles from "./OurWorks.module.scss"
import Typography from "../../elements/Typography/Typography"
import { useContext } from "react"
import { ModalContext } from "../../../providers/GameProviders"
import OurWorksItem from "./OurWorksItem"

const OurWorks = () => {
	const { handleModalOpen } = useContext(ModalContext)
	return (
		<section className={styles.works}>
			<div className={`container ${styles.works__container}`}>
				<div className={styles.works__top_content}>
					<Typography className={styles.works__top_title} variant="text">
						/наша гордость
					</Typography>
					<Typography className={styles.works__top_descr} variant="text">
						Подготовим для Вас 3 коммерческих предложения по созданию сайта
					</Typography>
				</div>
				<div className={styles.works__items}>
					{ourWorksSites.map((work) => (
						<OurWorksItem key={work.id} work={work} />
					))}
				</div>
				<button onClick={handleModalOpen} className={styles.works__btn}>
					заказать сайт
				</button>
			</div>
		</section>
	)
}

export default OurWorks
