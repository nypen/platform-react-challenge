import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { AppRoute } from './routes'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Cats} element={'Cats'} />
                <Route path={AppRoute.Breeds} element={'Breeds'} />
                <Route path={AppRoute.Favourites} element={'Favourites'} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
