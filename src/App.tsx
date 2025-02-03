import './App.css'
import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import Logo from './components/Logo'
import Modal from './components/Modal'
import categories from "./utils/project/categories.json"
import websites from "./utils/project/websites.json"
import { ModalProvider } from './utils/context/ModalProvider'
import video from './assets/video/IMG_5811.mp4'

function App() {

	return (
		<ModalProvider>
			<Header headerItems={categories} />
			<div className='headerComponent'>
				<video autoPlay muted className='video'>
					<source src={video} type='video/mp4'/>
				</video>
				<div className='subTitleBox'>
					<h2 className='subTitle'>Tous nos articles disponibles sur les différentes plateformes</h2>
					<ul className='headerList'>
						{websites.map(website => <li key={website.id}><Logo logoItem={website}/></li>)}
					</ul>
				</div>
			</div>
			<div>
				{categories.map( category => <Category key={category.id} categoryItem={category}/>)}
			</div>
			<Modal/>
			<Footer/>
		</ModalProvider>
	)
}

export default App
