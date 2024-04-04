import { Dispatch, SetStateAction, createContext, useState } from "react"

type GameProvidersProps = {
	children: React.ReactNode
}

interface IContext {
	isActiveModal: boolean
	setIsActiveModal: Dispatch<SetStateAction<boolean>>
	handleModalOpen: () => void
	handleModalClose: () => void
}

const defaultState = {
	isActiveModal: false,
	setIsActiveModal: (flag: boolean) => flag,
}
//@ts-ignore
export const ModalContext = createContext<IContext>(defaultState)

export const ModalProvider = ({ children }: GameProvidersProps) => {
	const [isActiveModal, setIsActiveModal] = useState<boolean>(false)
	const handleModalOpen = () => {
		setIsActiveModal(true)
	}
	const handleModalClose = () => {
		setIsActiveModal(false)
	}
	return (
		<ModalContext.Provider
			value={{
				isActiveModal,
				setIsActiveModal,
				handleModalOpen,
				handleModalClose,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}
