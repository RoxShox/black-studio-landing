import React from "react"
import "./Typography.scss"
const variantsMapping: any = {
	h2: "h2",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	text: "p",
}

type TypographyProps = {
	variant: any
	className: any
	children: React.ReactNode
}

const Typography = ({
	variant,
	className,
	children,
	...props
}: TypographyProps) => {
	const Component = variant ? variantsMapping[variant] : "p"

	return (
		<Component
			className={` ${`typography--variant-${variant}`} ${className}`}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Typography
