import { Link } from "react-router-dom"

function getBtnSize(size) {
    let returnSize;

    if (size === "small") {
        returnSize = "w-1/6 h-8 text-[0.7rem]"
    }
    else if (size === "medium") {
        returnSize = "w-2/6 h-9 text-xs";
    }
    else if (size === "fit") {
        returnSize = "w-full h-10 text-[0.9rem]";
    }
    else {
        returnSize = "w-4/6 h-10 text-sm";
    }
    return returnSize;
}
function getBtnColor(type) {
    let color;
    switch (type) {
        case 'cancel':
            color = ' text-primary bg-white border border-primary';
            break;
        case 'disable':
            color = ' text-white bg-gray-400';
            break;
        default:
            color = ' text-white bg-primary hover:bg-primary/90';
            break;
    }
    return color;
}
function getBtnCursor(type) {
    let cursor;
    switch (type) {
        case 'disable':
            cursor = '  cursor-not-allowed';
            break;
        case 'cancel':
            cursor = ' cursor-pointer';
        default:
            break;
    }
    return cursor;

}
function getBtnStyle(size, type) { // type: default, cancel, disable
    const btnSize = getBtnSize(size);
    const btnColor = getBtnColor(type);
    const btnCursor = getBtnCursor(type);

    return `${btnSize} ${btnColor} ${btnCursor} rounded-lg`;
}

export const Button = ({ content, size = 'large', type = 'default', path, onClick }) => {
    const btnClassName = getBtnStyle(size, type);
    const ButtonWrapperClassName = "w-full h-fit cursor-pointer flex justify-center";
    const btn = (
        <button
            className={btnClassName}
            disabled={type === 'disable' ? true : false}
            onClick={onClick}
        >{content}</button>
    );
    let component;

    if (path === undefined) {
        component = (
            <div className={ButtonWrapperClassName}>
                {btn}
            </div>
        )
    } else {
        component = (
            <Link to={path} className={ButtonWrapperClassName}>
                {btn}
            </Link>
        )
    }

    return component;
}