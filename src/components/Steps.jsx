import { CheckIcon } from "@heroicons/react/20/solid";

export const Steps = ({ totalSteps = 3, currentStep = 2 }) => { // TODO: defuault값 삭제
    const progressArea = parseInt(currentStep / totalSteps * 100); 
    let progressDivBgColor = "";
    if(totalSteps===currentStep){
        progressDivBgColor = " bg-primary";
    } else {
        progressDivBgColor = `bg-gradient-to-r 
                            from-primary from-${progressArea}% 
                            via-primary-100 via-${parseInt(progressArea/3)}% 
                            to-white to-${100-progressArea}%`;
    }

    return (
        <div className="h-full w-full">
            <div className="container mx-auto">
                <div className="w-full mx-auto flex items-center">
                    <div className={`w-full h-1 flex justify-between items-center 
                                    ${progressDivBgColor}`}>
                        {[...Array(totalSteps)].map((_, step) => (
                            <div
                                key={step}
                                className={`relative h-5 w-5 rounded-full shadow flex items-center justify-center 
                                            ${((currentStep) >= (step + 1)) ? "bg-primary-900" : "bg-white"
                                            }`}>
                                {currentStep === (step + 1) && <CheckIcon className="h-3.5 w-3.5 text-white" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
