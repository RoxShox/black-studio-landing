import React from "react"
import Typography from "../../elements/Typography/Typography"
import styles from "./OurWorks.module.scss"
import { ourWorksSitesType } from "../../../type"
type OurWorksItemProps = {
	work: ourWorksSitesType
}

const OurWorksItem = ({ work }: OurWorksItemProps) => {
	return (
		<div key={work.id} className={styles.works__item}>
			<img className={styles.works__item_img} src={work.src} alt="" />
			<Typography className={styles.works__item_title} variant="h5">
				{work.title}
			</Typography>
		</div>
	)
}

export default OurWorksItem
