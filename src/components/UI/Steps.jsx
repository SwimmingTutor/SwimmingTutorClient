import { CheckIcon } from "@heroicons/react/20/solid";

const Steps = ({ steps = [
        '1단계', '2단계', '3단계', '4단계'
    ], currentStep = 2 }) => { // TODO: defuault값 삭제
    const totalSteps = steps.length;
    const progressArea = parseInt(currentStep / totalSteps * 100); 
    let progressDivBgColor = "";
    if(totalSteps===currentStep){
        progressDivBgColor = " bg-primary";
    } else {
        progressDivBgColor = `bg-gradient-to-r 
                            from-primary from-${progressArea}% 
                            via-primary-100 via-${parseInt(progressArea/3)}% 
                            to-gray-200 to-${100-progressArea}%`;
    }

    return (
        <div className="h-full w-full">
            <div className="container mx-auto flex flex-col gap-5">
                <div className="w-full mx-auto flex items-center">
                    <div className={`w-full h-1 flex justify-between items-center 
                                    ${progressDivBgColor}`}>
                        { steps.map((_, index) => (
                            <div
                                key={index}
                                className={`relative h-5 w-5 rounded-full shadow flex items-center justify-center 
                                            ${((currentStep) >= (index + 1)) ? "bg-primary-900" : "bg-white"
                                            }`}>
                                {currentStep === (index + 1) && <CheckIcon className="h-3.5 w-3.5 text-white" />}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-1 flex justify-between items-center">
                        {steps.map((item, step) => (
                            <div
                                className={`text-xs ${currentStep===(step+1) ? "text-primary font-semibold":"text-zinc-400 font-extralight"}`}
                            > 
                               {item}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
export default Steps;