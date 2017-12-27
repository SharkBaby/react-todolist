export const openDialog =(name)=> {
    return {
        type: 'DIALOG_WILL_OPEN',
        name: name
    }
}

export const closeDialog =(name)=> {
    return {
        type: 'DIALOG_WILL_CLOSE',
        name: name
    }
}