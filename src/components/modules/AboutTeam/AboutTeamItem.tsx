import Typography from "../../elements/Typography/Typography"

import { aboutTeamPersonType } from "../../../type"

import styles from "./AboutTeam.module.scss"

type AboutTeamItemProps = {
	item: aboutTeamPersonType
}

const AboutTeamItem = ({ item }: AboutTeamItemProps) => {
	return (
		<div className={styles.about__item}>
			<Typography className={styles.about__item_title} variant="h4">
				{item.name}
			</Typography>
			<div className={styles.about__item__content_wrap}>
				<img className={styles.about__item_picture} src={item.img} alt="" />
				<Typography variant="text" className={styles.about__item_experience}>
					{item.experience}
				</Typography>
				<Typography variant="text" className={styles.about__item_profession}>
					{item.profession}
				</Typography>
			</div>
		</div>
	)
}

export default AboutTeamItem
