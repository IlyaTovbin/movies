export async function fetchData(url, type, data = false){
    const requestOptions = {
        method: type,
        headers: { 'Content-Type': 'application/json' },
    };

    if(data) {
        requestOptions.body = JSON.stringify(data)
    }
    
    return await fetch(url, requestOptions)
        .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                return false;
            }
        }).catch(res => console.log(res))  
}