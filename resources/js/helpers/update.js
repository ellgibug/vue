export function update(record) {
    return new Promise((res, rej) => {
        axios.get('/api/v1', record)
            .then((response) => {
                res(response.data)
            })
            .catch((err)=>{
                rej('Error msg here')
            })
    })
}

export function getLocalRecord() {
    // const recordStr = localStorage.getItem('record');
    const recordStr = 1;

    if(!recordStr){
        return null;
    }

    return JSON.parse(recordStr);
}