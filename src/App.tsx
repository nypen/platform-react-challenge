import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { AppRoute } from './routes'
import { PageLayout } from './components/common/pageLayout'
import { CatsPage } from './components/pages/cats/catsPage'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path={AppRoute.Cats} element={<CatsPage />} />
                    <Route path={AppRoute.Breeds} element={'Breeds'} />
                    <Route path={AppRoute.Favourites} element={'Favourites'} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
