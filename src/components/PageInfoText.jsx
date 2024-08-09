import BLANKDIV from "../constants/blankDiv";

const PageInfoText = ({ title, content }) => {
    return (
        <div className="flex flex-col gap-5 cursor-default text-center">
            <div className='font-extrabold text-primary text-5xl'>{title}</div>
            {BLANKDIV[2]}
            <div>{content}</div>
        </div>
    )
}
export default PageInfoText;