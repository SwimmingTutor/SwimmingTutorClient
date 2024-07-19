import lockIcon from '../assets/icons/badge-lock.svg';
const Badge = ({title, content, img, size="w-14"}) => {
    const isLock = img === "lock";
    return (
        <div className="badge-container w-full h-fit flex flex-col gap-1 justify-between items-center">
            <div className={`
                                h-fit aspect-square object-contain mx-auto rounded-full 
                                ${size} 
                                ${isLock? "p-4 bg-zinc-300":"p-2 bg-zinc-100"}
                            `}>
                <img src={isLock? lockIcon:img} alt={`${title} image`} />
            </div>
            <div className={`text-center font-thin text-xs text-balance ${!isLock && " text-black"}`}>{title}</div>
        </div>
    )
}

export default Badge;