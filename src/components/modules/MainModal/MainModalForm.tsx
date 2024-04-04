import { useState } from "react"

import Typography from "../../elements/Typography/Typography"
import { PhoneInput } from "react-international-phone"
import Button from "../../elements/Button/Button"

import styles from "./MainModal.module.scss"

const MainModalForm = () => {
	const [valuePhone, setValuePhone] = useState("")
	const [valueName, setValueName] = useState("")
	const [valueDescr, setValueDescr] = useState("")

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
		const newPerson = {
			valuePhone,
			valueName,
			valueDescr,
		}
		alert(JSON.stringify(newPerson))
	}

	return (
		<form onSubmit={handleSubmit} className={styles.modal__form}>
			<div className={styles.modal__form_top__wrap}>
				<label className={styles.modal__form_top__label}>
					<Typography className={styles.modal__form__label_text} variant="text">
						Имя
					</Typography>
					<input
						className={styles.modal__form__input}
						value={valueName}
						onChange={(e) => setValueName(e.target.value)}
						name="name"
						type="text"
						required
						placeholder="Алексей "
					/>
				</label>
				<label className={styles.modal__form_top__label}>
					<Typography className={styles.modal__form__label_text} variant="text">
						Телефон
					</Typography>
					<PhoneInput
						name="phone"
						className={styles.modal__form__input}
						defaultCountry="ru"
						required
						value={valuePhone}
						onChange={(phone) => setValuePhone(phone)}
						placeholder="(888) 333 22-22 "
					/>
				</label>
			</div>
			<label className={styles.modal__form_top__label}>
				<Typography
					className={styles.modal__form__label_text_bottom}
					variant="text"
				>
					Ваши пожелания по сайту
				</Typography>

				<input
					value={valueDescr}
					onChange={(e) => setValueDescr(e.target.value)}
					className={styles.modal__form__input}
					required
					name="description"
					type="text"
				/>
			</label>
			<Button className={styles.modal__form__btn}>Оставить заявку</Button>
		</form>
	)
}

export default MainModalForm
