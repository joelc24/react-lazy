import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}


const RegisterPage = lazy(() => import('../03-forms/pages/RegisterPage'))
const FormikBasicPage = lazy(() => import('../03-forms/pages/FormikBasicPages'))
const FormikYupPage = lazy(()=> import('../03-forms/pages/FormikYupPages'))
const FormikComponntsPage = lazy(()=> import('../03-forms/pages/FormikComponents'))
const FormikAbstractionPage = lazy(()=> import('../03-forms/pages/FormikAbstraction'))

export const routes : Route[] = [
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'Register Page'
    },
    {
        to: '/formik-basic',
        path: 'formik-basic',
        Component: FormikBasicPage,
        name: 'Formik Basic'
    },
    {
        to: '/formik-yup',
        path: '/formik-yup',
        Component: FormikYupPage,
        name: 'Formik Yup'
    },
    {
        to: '/formik-components',
        path: '/formik-components',
        Component: FormikComponntsPage,
        name: 'Formik Components'
    },
    {
        to: '/formik-abstraction',
        path: '/formik-abstraction',
        Component: FormikAbstractionPage,
        name: 'Formik Abstraction'
    }
]