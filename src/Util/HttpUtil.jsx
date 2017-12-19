import 'isomorphic-fetch';


const Host = 'http://todolisthond.azurewebsites.net'

const request = (path, options) => {
    var url = `${Host}/${path}`
    var headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    }

    var init = {
        method: (options && options.method) || 'GET',  
        headers: (options && options.headers) || headers,  
    }
    if(options && options.body) {
        init.body = JSON.stringify(options.body)
    }

    return dispatch =>{
        if(options.requestingType)dispatch({type:options.requestingType});
        return fetch(url,init)
        .then((response) => {
            if(response.ok){
                return returnContentByType(response)
            } else if(response.status >= 500){
                throw new Error(response.statusText);
            } else {
                return returnContentByType(response)
            }
        })
        .then(content => {
            if(content && content.error) {
                throw new Error(content.error);
            } else {
                dispatch({
                    type:options.requestType,
                    isSuccess:true,
                    callback:options.callback,
                    content:content
                })
            }
        })

    }
}


const returnContentByType = (response) => {
    var contentType = response.headers.get("Content-Type")
    if(contentType == null)
        return null;
    var type = contentType.split(";")[0];
    switch (type){
        case 'text/plain':
            return response.text();
            break;
        case 'application/json':
            return response.json();
            break;
        default:
            return null;
    }
}

const buildGetParams = data => {
    if(!data) return '';
    let paramArr = []; 
    let paramStr = ''; 
    for (let attr in data) {
        if(data[attr])
            paramArr.push(attr + '=' + data[attr]);
    }
    paramStr = paramArr.join('&');
    paramStr = '?' + paramStr;
    return paramStr
}

    export const fetchData = (path, params, requestingType, requestType, callback) => {
        if(params != null)
            path = path + buildGetParams(params);
    
        var options = {
            method:'Get', 
            requestingType: requestingType,
            requestType:requestType,
            callback:callback
        }
    
        return request(path, options);
    }
        
    export const postData = (path, postData, requestType, callback) => {
    
        var options = {
            method:'Post', 
            requestType:requestType,
            callback:callback,
            body:postData
        }
    
        return request(path, options);
    }
    
    export const deleteData = (path, deleteData, requestType, callback) => {
        var options = {
            method:'Delete', 
            requestType:requestType,
            callback:callback,
            body:deleteData
        }
    
        return request(path, options);
    }
    
    export const putData = (path, putData, requestType, callback) => {
        var options = {
            method:'Put', 
            requestType:requestType,
            callback:callback,
            body:putData
        }
        return request(url, options);
    }