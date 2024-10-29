import './styles/App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

function App() {
	return (
		<body>
			{/*Title content*/}
			<Header/>
      {/* Front Page Content */}
      <Main/>
			{/*Generic footer*/}
			<Footer/>
		</body>
	);
}

export default App;
