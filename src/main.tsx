// main.tsx
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from "./app";
import './scss/index.scss'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
