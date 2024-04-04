type ButtonProps = {
	className: any
	children: React.ReactNode
	onClick?: () => void
}

const Button = ({ className, children, onClick, ...props }: ButtonProps) => {
	return (
		<button className={className} {...props} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
