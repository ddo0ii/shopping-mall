// main.tsx
import {createRoot} from 'react-dom/client'
import {BrowserRouter, useRoutes} from 'react-router-dom'
import routes from '~react-pages'

function Router() {
    return useRoutes(routes)
}

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
)
