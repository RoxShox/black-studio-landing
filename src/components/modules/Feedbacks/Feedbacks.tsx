import { motion } from "framer-motion"

import Typography from "../../elements/Typography/Typography"
import FeedbackItem from "./FeedbackItem"

import { reviews } from "../../../constants"

import styles from "./Feedbacks.module.scss"

const Feedbacks = () => {
	return (
		<section className={styles.feedbacks}>
			<div className="container">
				<div className={styles.feedbacks__inner}>
					<Typography variant="text" className={styles.feedbacks__subtitle}>
						/отзывы
					</Typography>
					<Typography variant="h2" className={styles.feedbacks__title}>
						МНЕНИЕ О НАС
					</Typography>

					<motion.div
						variants={{
							hidden: { opacity: 0 },
							show: { opacity: 1, transition: { staggerChildren: 0.25 } },
						}}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className={styles.feedbacks__items}
					>
						{reviews.map((review) => (
							<FeedbackItem review={review} key={review.id} />
						))}
						<motion.div
							variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
							className={styles.feedbacks__item_last}
						>
							<Typography
								className={styles.feedbacks__item_last__title}
								variant="h5"
							>
								ОСТАВЬТЕ ОТЗЫВ
							</Typography>
							<Typography
								className={styles.feedbacks__item_last__text}
								variant="text"
							>
								Это поможет нам в дальнейшем улучшить нашу коммуникацию с
								клиентами
							</Typography>
							<button className={styles.feedbacks__item_last__btn}>
								ОТЗЫВ
							</button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Feedbacks
