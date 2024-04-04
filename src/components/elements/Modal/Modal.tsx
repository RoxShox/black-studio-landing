import {
	MouseEventHandler,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react"
import Portal, { createContainer } from "./Portal/Portal"
import styles from "./Modal.module.scss"

const MODAL_CONTAINER_ID = "modal-container-id"

type modalProps = {
	onClose?: () => void
	children: React.ReactNode
	className: any
}

const Modal = ({ onClose, children, className }: modalProps) => {
	const [isMounted, setMounted] = useState(false)

	const rootRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID })
		setMounted(true)
		const handleWrapperClick = (event: MouseEvent) => {
			const { target } = event

			if (target instanceof Node && rootRef.current === target) {
				onClose?.()
			}
		}
		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose?.()
			}
		}

		window.addEventListener("click", handleWrapperClick)
		window.addEventListener("keydown", handleEscapePress)

		return () => {
			window.removeEventListener("click", handleWrapperClick)
			window.removeEventListener("keydown", handleEscapePress)
		}
	}, [onClose])

	const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
		onClose?.()
	}, [onClose])

	return isMounted ? (
		<Portal id={MODAL_CONTAINER_ID}>
			<div className={styles.wrap} ref={rootRef}>
				<div className={`${styles.content} ${className}`}>{children}</div>
			</div>
		</Portal>
	) : null
}

export default Modal
