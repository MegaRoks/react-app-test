export class Api {
    constructor(url, body, token) {
        this.url = url;
        this.body = body;
        this.token = token;
    }

    async get() {
        const res = await fetch(this.url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                token: this.token,
            },
        });
        return res.json();
    }

    async post() {
        const res = await fetch(this.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                token: this.token,
            },
            body: this.body,
        });
        return res.json();
    }

    async delete() {
        const res = await fetch(this.url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                token: this.token,
            },
            body: this.body,
        });
        return res.json();
    }

    async upload() {
        const res = await fetch(this.url, {
            method: 'POST',
            headers: {
                token: this.token,
            },
            body: this.body,
        });
        return res.json();
    }
}
