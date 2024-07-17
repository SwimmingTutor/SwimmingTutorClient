const Wrapper = ({children}) => {    
    return (
        <div id="wrapper" className="container relative w-app min-h-screen h-auto">
            {children}
        </div>
    )
}
export default Wrapper;