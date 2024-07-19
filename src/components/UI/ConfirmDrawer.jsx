import { forwardRef } from "react"
import Drawer from "./Drawer.jsx"
import Button from "./Button.jsx"

const ConfirmDrawer = forwardRef((props, ref) => {
    /*
     * Drawer props 명세서
     * - props: Drawer에 필요한 인자()
     * - ref: Drawer ref를 참조하는 객체
     * - message: drawer에 띄울 메시지
     * - btnCaption: confirm 확인 버튼 내용
     * - onDraw: onclick handle 함수
     */
    return (
        <Drawer {...props} ref={ref}>
            <div className="container drawer-content-container w-full h-52 overflow-auto pb-4 bg-white flex flex-col justify-start items-center">
                {/* message area */}
                <div className="message-container container w-4/5 h-[62%] text-center text-sm flex items-center justify-center">
                    {props.message}
                </div>

                {/* button area */}
                <div className="btn-container w-10/12 h-[27%] flex gap-2">
                {/* content, size = 'large', type = 'default', path */}
                    <Button size='fit' type='cancel' content='취소' onClick={()=>{ref.current.draw();}}/>
                    <Button size='fit' content={props.btnCaption} onClick={props.onDraw}/>
                </div>
            </div>
        </Drawer>
    )
})
export default ConfirmDrawer;