export class Endpoints {
    constructor(param = '') {
        this.param = param;
        this.baseUrl = 'https://node-app-test-1.herokuapp.com';
        this.baseUrlOfFiles = 'https://react-test-app-1.herokuapp.com';
    }

    getUrl() {
        return `${this.baseUrl}/${this.param}`;
    }

    getUrlOfFiles() {
        return `${this.baseUrlOfFiles}/${this.param}`;
    }
}
