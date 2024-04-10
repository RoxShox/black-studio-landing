import { useCallback, useContext, useState } from "react"
import { motion } from "framer-motion"

import { ModalContext } from "../../../providers/GameProviders"

import Typography from "../../elements/Typography/Typography"
import Button from "../../elements/Button/Button"
import FeatureSiteItem from "./FeatureSiteItem"

import { HoverStateEnum } from "../../../type"

import { featureSites } from "../../../constants"

import styles from "./Feature.module.scss"

const Feature = () => {
	const [sites, setSites] = useState(featureSites)
	const { handleModalOpen } = useContext(ModalContext)

	const handleItemMouseEnter = useCallback(
		(id: number) => {
			const currentItem = featureSites.find((item) => item.id === id)
			if (currentItem) {
				currentItem.hoverState = HoverStateEnum.hover
				const allSite = sites.map((item) =>
					item.id !== id
						? { ...item, hoverState: HoverStateEnum.hide }
						: { ...currentItem }
				)
				setSites([...allSite])
			}
		},
		[sites]
	)
	const handleItemMouseOut = useCallback(() => {
		const allSites = sites.map((item) => ({
			...item,
			hoverState: HoverStateEnum.default,
		}))
		setSites([...allSites])
	}, [sites])

	return (
		<section className={styles.feature}>
			<div className={`${styles.ellipse_container} container`}>
				<motion.div
					initial={{ opacity: 0, x: -500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					<Typography variant="h2" className={styles.feature__title}>
						ДИЗАЙНИМ, ВЕРСТАЕМ <span>САЙТЫ НА ТИЛЬДЕ</span>
					</Typography>
					<Typography variant="text" className={styles.feature__description}>
						что делает нас особенными? Мы не просто создаем сайты, мы создаем
						целые истории, которые захватывают внимание и оставляют незабываемое
						впечатление.
					</Typography>

					<div className={styles.feature__contact_wrap}>
						<Button className={styles.feature__btn} onClick={handleModalOpen}>
							Связаться с нами
						</Button>

						<div className={styles.feature__promo_wrap}>
							<Typography variant="text" className={styles.feature__promo}>
								NEFT2GAZ8
							</Typography>
							<Typography
								variant="text"
								className={styles.feature__promo_percent}
							>
								10% <br />
								по промокоду
							</Typography>
						</div>
					</div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, x: 500 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, ease: "easeOut" }}
				className={styles.feature__sites}
			>
				{sites.map((site) => (
					<FeatureSiteItem
						key={site.id}
						item={site}
						state={HoverStateEnum.default}
						onHover={handleItemMouseEnter}
						onOut={handleItemMouseOut}
					/>
				))}
			</motion.div>
		</section>
	)
}

export default Feature
