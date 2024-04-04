import AboutTeam from "./components/modules/AboutTeam/AboutTeam"
import Feature from "./components/modules/Feature/Feature"
import Feedbacks from "./components/modules/Feedbacks/Feedbacks"
import Footer from "./components/modules/Footer/Footer"
import Header from "./components/modules/Header/Header"
import MainModal from "./components/modules/MainModal/MainModal"
import OurServices from "./components/modules/OurServices/OurServices"
import OurWorks from "./components/modules/OurWorks/OurWorks"

import { ModalProvider } from "./providers/GameProviders"

function App() {
	return (
		<div className="App">
			<ModalProvider>
				<Header />
				<Feature />
				<AboutTeam />
				<OurWorks />
				<OurServices />
				<Feedbacks />
				<Footer />
				<MainModal />
			</ModalProvider>
		</div>
	)
}

export default App
