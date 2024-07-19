const DividerWithText = ({ text }) => {
    const dividerDivClassName = "w-5/12 justify-between items-center border-t-[0.1px] border-b-neutral-200";
    return (
        <div className="m-auto w-11/12 flex flex-row justify-between items-center">
            <div className={dividerDivClassName}></div>
            <div className="w-2/12 text-center text-xs">{text}</div>
            <div className={dividerDivClassName}></div>
        </div>
    )
}

export default DividerWithText;