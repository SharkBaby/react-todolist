import HttpUtil from '../../Util/HttpUtil'
import {HOST} from '../../Util/Constants'


const url=`${HOST}/todolist`;

export const SelectTodolistItem=(todolistItem)=>{
    return {
        type: "TODOLISTITEM_DID_SELECT",
        todolistItem: todolistItem,
    }
}
export const GetTodolist = ()=> {
    return async(dispatch) => {
        let httpUtil = new HttpUtil();
        dispatch({
            type: 'TODOLIST_WILL_GET'
          });
        let todolist = await httpUtil.HttpGetAsync(url);
        dispatch({
            type: 'TODOLIST_DID_GET',
            todolist:todolist
          });
    }
}

export const AddTodolist = (data) =>  {
    let httpUtil = new HttpUtil();
    return async(dispatch) =>{
        await httpUtil.HttpPostAsync(url,data);
        dispatch({
            type: 'TODOLIST_DID_ADD',
          });
    }
}

export const DeleteTodolist = (id)=> {
    let httpUtil = new HttpUtil();
    return async(dispatch) =>{
        await httpUtil.HttpDeleteAsync(`${url}/${id}`,null);
        dispatch({
            type: 'TODOLIST_DID_DELETE',
        });
    }
}

export const UpdateTodolist = (id, data) => {
    let httpUtil = new HttpUtil();
    return async(dispatch) =>{
        await httpUtil.HttpPutAsync(`${url}/${id}`,data);
        dispatch({
            type: 'TODOLIST_DID_UPDATE',
          });
    }
  
}