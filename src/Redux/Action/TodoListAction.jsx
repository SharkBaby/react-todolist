import {fetchData, postData, putData, deleteData} from '../../Util/HttpUtil'

const Path='todolist';

export const GetTodolist = ()=>{
    return fetchData(Path, null, "TODOLIST_WILL_GET", "TODOLIST_DID_GET", null)
}

export const AddTodolist = (params, callback) => {
    return postData(Path, params, 'TODOLIST_DID_ADD', callback)
}

export const DeleteTodolist = (id, callback)=>{
    return deleteData(`${Path}/${id}`, null, 'TODOLIST_DID_DELETE',callback)
}

export const UpdateTodolist = (id, params,callback) => {
    return putData(`${Path}/${id}`, params, 'TODOLIST_DID_UPDATE', callback)
}