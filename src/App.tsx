import './App.css'
import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import Logo from './components/Logo'
import categories from "./utils/project/categories.json"
import websites from "./utils/project/websites.json"

function App() {

  return (
    <>
	<Header/>
	<div className='headerComponent'>
		<h1>Le Bazar d'Avir</h1>
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
	{categories.map( categorie => <Category key={categorie.id} categoryId={categorie.id}/>)}
	<Footer/>
    </>
  )
}

export default App
