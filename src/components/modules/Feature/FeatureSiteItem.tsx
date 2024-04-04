import classNames from "classnames"

import { HoverStateEnum, featureSitesType } from "../../../type"

import styles from "./Feature.module.scss"
type FeatureSiteItemProps = {
	item: featureSitesType
	state: HoverStateEnum
	onHover: (id: number) => void
	onOut: () => void
}

const FeatureSiteItem = ({ item, onHover, onOut }: FeatureSiteItemProps) => {
	const activeClass = classNames({
		[styles.hover__item]: item.hoverState === HoverStateEnum.hover,
		[styles.feature__site]: true,
		[styles.hide__item]: item.hoverState === HoverStateEnum.hide,
	})
	return (
		<div
			className={activeClass}
			onMouseEnter={() => onHover(item.id)}
			onMouseOut={onOut}
		>
			<img className={styles.feature__site__img} src={item.src} alt="" />
		</div>
	)
}

export default FeatureSiteItem
