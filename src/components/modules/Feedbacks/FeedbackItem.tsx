import { motion } from "framer-motion"

import Typography from "../../elements/Typography/Typography"

import { reviewType } from "../../../type"

import styles from "./Feedbacks.module.scss"

type FeedbackItemProps = {
	review: reviewType
}

const FeedbackItem = ({ review }: FeedbackItemProps) => {
	return (
		<motion.div
			variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
			className={styles.feedbacks__item}
		>
			<img src={review.src} alt="" />
			<Typography variant="text" className={styles.feedbacks__item_descr}>
				{review.text}
			</Typography>
		</motion.div>
	)
}

export default FeedbackItem
