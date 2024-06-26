//created this modal for the usage of cart & checkout
//this modal components acts as a ui block can be used in many places now

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ({ children, open,onClose, className='' }) {
    //to access the open from outside we r using this ref & effects
    const dialog = useRef();
    useEffect(()=> {
        const modal = dialog.current
        if(open){
            modal.showModal()
        }

        return () => modal.close()
    }, [open])
    //to add class based on cart or checkout we added a extra prop className here
    // to embed this in the html file, we used this createPortal,which has another arg at the end
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>{children}</dialog>,
    document.getElementById("modal")
  );
}
//when we close the model by using esc key , dialog is closed by the browser,
//but in the app, userProgress won't change
//ex. it will still stay at cart or checkout 
// to resolvw ths problem we add onCLose prop in the dialog elment
