 class ApiAccess {
    getItems(){
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
                if (response.status !== 200) {
                    reject({message:"Http Request failed"});
                } 
                else {
                    let data = response.json();
                    resolve(data);
                }
            })
            .catch(err => {
                reject(err);
            });
        });
    }
}

export default ApiAccess;