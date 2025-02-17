import './App.css'
import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import Logo from './components/Logo'
import Modal from './components/Modal'
import categories from "./utils/project/categories.json"
import websites from "./utils/project/websites.json"
import video from './assets/video/IMG_5811.mp4'
import { ModalProvider } from './utils/context/ModalProvider'

function App() {

	return (
		<ModalProvider>
			<Header headerItems={categories} />
			<div className='headerComponent'>
				<div className='videoContainer'>
					<video muted className='video'>
						<source src={video} type='video/mp4'/>
					</video>
				</div>
				<div className='subTitleBox'>
					<h2 className='subTitle'>chine et deniche !</h2>
					<p className='subContent'>Tous nos articles disponibles sur les différentes plateformes</p>
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
