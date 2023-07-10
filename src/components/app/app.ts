import AppController from '../controller/controller';
import AppView from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const searchField = document?.getElementById('search');
        searchField?.addEventListener('search', (e) => this.controller.getNews(e, (response) => { this.view.drawNews(response); }));
        document
            ?.querySelector('.sources')
            ?.addEventListener('click', (e) => this.controller.getNews(e, (response) => { this.view.drawNews(response); }));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
