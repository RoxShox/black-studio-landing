import { useMediaQuery } from "../../../hooks/useMediaQuery"

import Typography from "../../elements/Typography/Typography"
import { ReactComponent as ServiceIcon } from "../../../assets/img/services-brows-icon.svg"

import { ourServicesType } from "../../../type"

import styles from "./OurServices.module.scss"

type OurSeviceItemProps = {
	item: ourServicesType
}

const OurSeviceItem = ({ item }: OurSeviceItemProps) => {
	const isMedia1150 = useMediaQuery(1150)
	return (
		<div key={item.id} className={styles.services__item}>
			<div className={styles.services__item__left_content}>
				<ServiceIcon className={styles.services__item__left_content__icon} />
				<div>
					<Typography
						variant="h4"
						className={styles.services__item__left_content__title}
					>
						{item.title}
					</Typography>
					{isMedia1150 && (
						<Typography
							variant="text"
							className={styles.services__item__right_content__price}
						>
							{item.price}
						</Typography>
					)}
				</div>
			</div>
			<div className={styles.services__item__right_content}>
				{!isMedia1150 && (
					<Typography
						variant="text"
						className={styles.services__item__right_content__price}
					>
						{item.price}
					</Typography>
				)}

				<ul>
					{item.services.map((str) => (
						<li
							key={str}
							className={styles.services__item__right_content__service}
						>
							{str}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default OurSeviceItem
