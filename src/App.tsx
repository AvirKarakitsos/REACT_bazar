import './App.css'
import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import Logo from './components/Logo'
import Modal from './components/Modal'
import categories from "./utils/project/categories.json"
import websites from "./utils/project/websites.json"
import { ModalProvider } from './utils/context/ModalProvider'

function App() {

	return (
		<ModalProvider>
			<Header/>
			<div className='headerComponent'>
				<h1 className='mainTitle'>Le bazar d'Avir</h1>
				<div>
					<p>Trouvez votre objets sur les différentes plateformes</p>
					<ul className='headerList'>
						{websites.map(website => <li key={website.id}><Logo website={website}/></li>)}
					</ul>
				</div>
			</div>
			<div className='categories'>
				<ul className='categoriesList'>
					{categories.map(category => <li key={category.id}>{category.name}</li>)}
				</ul>
			</div>
			{categories.map( category => <Category key={category.id} categoryElement={category}/>)}
			<Modal/>
			<Footer/>
		</ModalProvider>
	)
}

export default App
