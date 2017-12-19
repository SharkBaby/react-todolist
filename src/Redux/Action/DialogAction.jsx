export const openDialog =(name)=> {
    return {
        type: "OPEN_DIALOG",
        name: name
    }
}

export const closeDialog =(name)=> {
    return {
        type: "CLOSE_DIALOG",
        name: name
    }
}