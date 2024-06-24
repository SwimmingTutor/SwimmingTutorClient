export const Main = ({children}) => {
    let mainClassName = "relative w-full h-fit min-h-screen p-2 bg-slate-50/65"
    return (
        <main id="main" className={mainClassName}>
            {children}
        </main>
    )
}