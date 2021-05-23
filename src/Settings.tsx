

const URL = "http://192.168.0.177:3000/api/v1"
export const fetchData = ({path, method="GET", token="", params={}, callback=(json)=>{}}) =>{
        let body = {}
        
        if(method == "GET"){
            body = {}
            path = path + new URLSearchParams(params)
        }else{
            body = {
                body: JSON.stringify(params)
            }
        }
        
        
        return fetch(URL + path, {
            method: method,
            headers: {
              'Accept': 'application/json',
              'Authorization': token,
              'Content-Type': 'application/json'
            },
            ...body
          }).then((response)=> response.json())
          .then((json)=>{
            callback(json)
          });
}
