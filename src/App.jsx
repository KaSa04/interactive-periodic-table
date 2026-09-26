import Home from './pages/Home';
import Header from './components/Header';
import './css/App.css'

function App() {

    return (
        <>
            <Header />
            <main className="main-content">
                <Home/>
            </main>
        </>
    )
}

export default App