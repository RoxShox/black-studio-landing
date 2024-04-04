export enum HoverStateEnum {
	default = "default",
	hide = "hide",
	hover = "hover",
}

export type featureSitesType = {
	id: number
	src: string
	hoverState: HoverStateEnum
}

export type reviewType = {
	id: number
	text: string
	src: any
}

export type ourServicesType = {
	id: number
	title: string
	price: string
	services: string[]
}

export type ourWorksSitesType = {
	id: number
	title: string
	src: any
}

export type aboutTeamPersonType = {
	id: number
	name: string
	img: any
	experience: string
	profession: string
}
