import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}


const RegisterPage = lazy(() => import('../03-forms/pages/RegisterPage'))

export const routes : Route[] = [
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'Register Page'
    }
]