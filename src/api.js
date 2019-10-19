export class Api {
    constructor(url, body) {
        this.url = url;
        this.body = body;
    }

    async get() {
        const res = await fetch(this.url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        });
        return res;
    }

    async post() {
        const res = await fetch(this.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: this.body,
        });
        return res;
    }

    async delete() {
        const res = await fetch(this.url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            body: this.body,
        });
        return res;
    }
}
