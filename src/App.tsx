import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { AppRoute } from './routes'
import { PageLayout } from './components/common/pageLayout'
import { CatsPage } from './components/pages/cats/catsPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BreedsPage } from './components/pages/breeds/breedsPage'
import { FavouritesPage } from './components/pages/favourites/favouritesPage'
import { NotFoundPage } from './components/pages/notFoundPage'

const queryClient = new QueryClient({});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<PageLayout />}>
                        <Route path={AppRoute.Cats} element={<CatsPage />} />
                        <Route path={AppRoute.Breeds} element={<BreedsPage />} />
                        <Route path={AppRoute.Favourites} element={<FavouritesPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
