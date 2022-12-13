import { Suspense } from "react"
import Preloader from "../components/preloader/preloader"


export const withLazyLoading = Component => props => <Suspense fallback={<Preloader/>}><Component {...props}/></Suspense>