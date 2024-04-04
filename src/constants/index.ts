import site1 from "../assets/img/landing.png"
import site2 from "../assets/img/multi-page.png"
import site3 from "../assets/img/online-store.png"
import feedback1 from "../assets/img/review-item-picture-1.png"
import feedback2 from "../assets/img/review-item-picture-2.png"
import feedback3 from "../assets/img/review-item-picture-3.png"
import feedback4 from "../assets/img/review-item-picture-4.png"
import feedback5 from "../assets/img/review-item-picture-5.png"
import feedback6 from "../assets/img/review-item-picture-6.png"
import feedback7 from "../assets/img/review-item-picture-7.png"
import featureSite1 from "../assets/img/feture-site-1.jpg"
import featureSite2 from "../assets/img/feture-site-2.jpg"
import featureSite3 from "../assets/img/feture-site-3.jpg"
import featureSite4 from "../assets/img/feture-site-4.jpg"
import aboutTeamImage1 from "../assets/img/about-image-1.png"
import aboutTeamImage2 from "../assets/img/about-image-2.png"

import { HoverStateEnum } from "../type"

export const headerMenuLink = [
	{ id: 1, title: "подарок" },
	{ id: 2, title: "Услуги" },
	{ id: 3, title: "Работы " },
	{ id: 4, title: "Цены" },
	{ id: 5, title: "Контакты" },
]

export const featureSites = [
	{ id: 1, src: featureSite1, hoverState: HoverStateEnum.default },
	{ id: 2, src: featureSite2, hoverState: HoverStateEnum.default },
	{ id: 3, src: featureSite3, hoverState: HoverStateEnum.default },
	{ id: 4, src: featureSite4, hoverState: HoverStateEnum.default },
]

export const ourWorksSites = [
	{ id: 1, title: "Лендинг", src: site1 },
	{ id: 2, title: "многостраничный", src: site2 },
	{ id: 3, title: "интернет - магазин", src: site3 },
]

export const aboutTeamPersons = [
	{
		id: 1,
		name: "Миронов Алексей",
		profession: "дизайнер",
		img: aboutTeamImage1,
		experience: "стаж 4 года",
	},
	{
		id: 2,
		name: "Кузнецова София",
		profession: "маркетолог",
		img: aboutTeamImage2,
		experience: "стаж 5 лет",
	},
]

export const ourServices = [
	{
		id: 1,
		title: "ЛЕНДИНГ",
		price: "от 9 000₽",
		services: [
			"Одностраничный сайт",
			"Аналитика основных конкурентов",
			"Прототип и копирайтинг",
			"1 дизайн - концепция ",
			"Дизайн оставшихся блоков",
		],
	},
	{
		id: 2,
		title: "МНОГОСТРАНИЧНЫЙ",
		price: "от 12 000₽",
		services: [
			"Аналитика основных конкурентов",
			"Прототип и копирайтинг",
			"Дизайн главной страницы в Figma ",
			"Вёрстка сайта на Тильде",
		],
	},
	{
		id: 3,
		title: "интернет - магазин",
		price: "от 19 000₽",
		services: [
			"Аналитика основных конкурентов",
			"Прототип и копирайтинг",
			"Дизайн главной страницы в Figma ",
			"Вёрстка сайта на Тильде",
			"Подключение каталога корзины, онлайн-оплатыи CRM - системы",
		],
	},
]

export const reviews = [
	{
		id: 1,
		text: "Эти ребята просто удивительные! Я смогла создать свою страничку без единой проблемы. Рекомендую всем!",
		src: feedback1,
	},
	{
		id: 2,
		text: "Спасибо команде за их услуги! Мой сайт выглядит стильно и профессионально благодаря им",
		src: feedback2,
	},
	{
		id: 3,
		text: "Работа с этими ребятами была невероятно продуктивной. Они быстро поняли мои потребности и создали сайт, который превзошел все ожидания",
		src: feedback3,
	},
	{
		id: 4,
		text: "Сотрудничество с этими дизайнерами - настоящее удовольствие! Они воплотили мои идеи в жизнь и создали сайт, о котором я мечтала",
		src: feedback4,
	},
	{
		id: 5,
		text: "Сотрудничество с этими дизайнерами - настоящее удовольствие! Они воплотили мои идеи в жизнь и создали сайт, о котором я мечтала",
		src: feedback5,
	},
	{
		id: 6,
		text: "Сотрудничество с этими дизайнерами - настоящее удовольствие! Они воплотили мои идеи в жизнь и создали сайт, о котором я мечтала",
		src: feedback6,
	},
	{
		id: 7,
		text: "Сотрудничество с этими дизайнерами - настоящее удовольствие! Они воплотили мои идеи в жизнь и создали сайт, о котором я мечтала",
		src: feedback7,
	},
]
