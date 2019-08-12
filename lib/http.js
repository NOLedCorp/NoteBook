export class HttpClient{
    async get(url) {
        let response = await fetch(url);
        return await response.json();
    }

    async post(url, inpt){
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(inpt)
        
        });

        return await response.json();        

    }
}