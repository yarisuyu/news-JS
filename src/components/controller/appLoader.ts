import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'fbd08b3b20ab433b964aeb3e22a0fae5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
