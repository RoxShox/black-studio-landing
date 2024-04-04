import { useContext } from "react"

import { ModalContext } from "../../../providers/GameProviders"

import Modal from "../../elements/Modal/Modal"
import Typography from "../../elements/Typography/Typography"
import MainModalForm from "./MainModalForm"

import styles from "./MainModal.module.scss"
import "react-international-phone/style.css"

const MainModal = () => {
	const { handleModalClose, isActiveModal } = useContext(ModalContext)
	return (
		<div>
			{isActiveModal && (
				<Modal onClose={handleModalClose} className={styles.modal__content}>
					<Typography className={styles.modal__title} variant="h4">
						Обсудить проект
					</Typography>
					<Typography className={styles.modal__descr} variant="text">
						Оставьте свои контактные данные для обсуждения вашего проекта
					</Typography>

					<MainModalForm />
				</Modal>
			)}
		</div>
	)
}

export default MainModal
