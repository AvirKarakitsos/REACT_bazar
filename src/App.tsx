import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
	<Header/>
	<div className='headerComponent'>
		<h1>Le Bazar d'Avir</h1>
		<p>Trouvez votre objets sur les différentes plateformes</p>
		<div>
			<ul className='headerList'>
				<li>vinted</li>
				<li>rakuten</li>
				<li>ebay</li>
				<li>leboncoin</li>
			</ul>
		</div>
	</div>
	<div className='categories'>
		<ul className='categoriesList'>
			<li>En vrac</li>
			<li>Livres</li>
			<li>Cartes à collectionner</li>
			<li>Timbres</li>
			<li>Pièces de monnaies</li>
		</ul>
	</div>
	<div className='banner'></div>
    </>
  )
}

export default App
