// vite.config.ts
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'

export default defineConfig({
    plugins: [
        react(),
        Pages({
            dirs: 'src/pages',
            extensions: ['tsx'],
        }),
    ],
})
