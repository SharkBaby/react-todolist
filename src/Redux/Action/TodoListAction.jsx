import httpUtil from '../../Util/HttpUtil'
import {HOST} from '../../Util/Constants'


const url=`${HOST}/todolist`;

export const selectTodolistItem=(todolistItem)=>{
    return {
        type: 'TODOLISTITEM_DID_SELECT',
        todolistItem: todolistItem,
    }
}
export const getTodolist = ()=> async (dispatch) =>{
    dispatch({
        type: 'TODOLIST_WILL_GET'
        });

    let todolist = await httpUtil.httpGetAsync(url);

    dispatch({
        type: 'TODOLIST_DID_GET',
        todolist:todolist
        });
}

export const addTodolist = (data) =>  async (dispatch) =>{
    await httpUtil.httpPostAsync(url,data);

    dispatch({
        type: 'TODOLIST_DID_ADD',
        });
}

export const deleteTodolist = (id)=> async (dispatch) =>{
    await httpUtil.httpDeleteAsync(`${url}/${id}`,null);

    dispatch({
        type: 'TODOLIST_DID_DELETE',
    });
}

export const updateTodolist = (id, data) => async (dispatch) =>{
    await httpUtil.httpPutAsync(`${url}/${id}`,data);
    dispatch({
        type: 'TODOLIST_DID_UPDATE',
        });
}