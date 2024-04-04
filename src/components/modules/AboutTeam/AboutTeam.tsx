import { motion } from "framer-motion"

import AboutTeamItem from "./AboutTeamItem"
import Typography from "../../elements/Typography/Typography"

import { aboutTeamPersons } from "../../../constants"

import styles from "./AboutTeam.module.scss"

const textAnimation = {
	hidden: { opacity: 0, x: 500 },
	show: {
		opacity: 1,
		x: 0,
		transition: { duration: 1, ease: "easeOut" },
	},
}

const AboutTeam = () => {
	return (
		<motion.section
			variants={textAnimation}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className={styles.about}
		>
			<div className="container">
				<div>
					<Typography className={styles.about__title} variant="h2">
						НЕМНОГО О нашей КОМАНДЕ
					</Typography>
				</div>

				<div className={styles.about__inner}>
					<Typography className={styles.about__descr} variant="text">
						Наша команда по верстке сайтов на тильде - это профессионалы,
						готовые создать для вас уникальные и современные веб-страницы. Мы
						обладаем глубокими знаниями в области веб-дизайна и разработки, что
						позволяет нам создавать сайты, которые не только эстетичны, но и
						функциональны.
					</Typography>

					<div className={styles.about__items}>
						{aboutTeamPersons.map((item) => (
							<AboutTeamItem item={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default AboutTeam
