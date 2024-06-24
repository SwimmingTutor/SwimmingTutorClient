import { Header } from "../Header.jsx"
import { Footer } from "../Footer.jsx"
import { Main } from "./Main.jsx"

export const MainLayout = () => {
    let mainLayoutClassName = "container relative w-[440px] min-h-screen h-auto";
    return (
        <div id="wrapper" className={mainLayoutClassName}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}