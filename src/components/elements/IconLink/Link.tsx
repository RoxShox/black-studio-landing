import React from "react"

type LinkProps = {
	src: any
	alt: string
	classname?: string
}

const IconLink = ({ src, classname, alt, ...props }: LinkProps) => {
	return (
		<a {...props} className={classname}>
			<img src={src} alt={alt} />
		</a>
	)
}

export default IconLink
