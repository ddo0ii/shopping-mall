// src/types/react-pages.d.ts (없으면 생성)
declare module '~react-pages' {
    import type {RouteObject} from 'react-router-dom'
    const routes: RouteObject[]
    export default routes
}