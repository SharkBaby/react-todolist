import {fetchData, postData, putData, deleteData} from '../../Util/HttpUtil'

const Path='todolist';

export const GetTodolist = (callback)=>{
    return fetchData(Path, null, "TODOLIST_WILL_GET", "TODOLIST_DID_GET", callback)
}

export const AddTodolist = (params, callback) => {
    return postData(Path, params, 'TODOLIST_DID_ADD', callback)
}

export const DeleteTodolist = (id, params, callback)=>{
    return deleteData(`${Path}/${id}`, params, 'TODOLIST_DID_DELETE',callback)
}

export const UpdateTodolist = (id, params,callback) => {
    return putData(`${Path}/${id}`, params, 'TODOLIST_DID_UPDATE', callback)
}