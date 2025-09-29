import { useRef } from "react"

export const useDialog = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const open = () => {
        if(dialogRef.current) {
            (dialogRef.current as HTMLDialogElement).showModal()
        } else {
            alert("No Dialog!")
        }
    }

    const close = () => {
        if(dialogRef.current) {
            (dialogRef.current as HTMLDialogElement).close()
        }
    }

    return {
        dialogRef,
        open,
        close
    }
}