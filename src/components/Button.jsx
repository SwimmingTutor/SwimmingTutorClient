import { Link } from "react-router-dom"

function getBtnSize(size){
    let returnSize;

    if(size==="small"){
        returnSize="w-1/6 h-8 text-[0.7rem]"
    }  
    else if(size==="medium") {
        returnSize="w-2/6 h-9 text-xs";
    }
    else if(size==="fit"){
        returnSize="w-full h-10 text-[0.9rem]";
    }
    else {
        returnSize="w-4/6 h-10 text-sm";
    }
    return returnSize;
}

export const Button = ({content, path, size="large", isDisabled=false}) => {
    const btnSize = getBtnSize(size);
    let btnClassName=`${btnSize} text-white rounded-lg `;
    if(isDisabled){
        btnClassName+="bg-gray-400"
    } else {
        btnClassName+="bg-primary hover:bg-primary/90"
    }
    return (
        <Link to={path} className="w-full h-fit cursor-pointer flex justify-center">
            <button 
                className={btnClassName}
                disabled={isDisabled?true:false}    
            >{content}</button>
        </Link>
    )
}