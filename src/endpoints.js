export class Endpoints {
    constructor(param = '') {
        this.param = param;
        this.baseUrl = 'http://localhost:8081';
    }

    getUrl() {
        return `${this.baseUrl}/${this.param}`;
    }
}
