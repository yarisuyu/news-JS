import ApiResponse from '../api/apiResponse';
import EverythingRequest from '../api/everything/everythingRequest';
import EverythingResponse from '../api/everything/everythingResponse';
import SourceRequest from '../api/sources/sourceRequest';
import SourceResponse from '../api/sources/sourceResponse';
import { responseCallback } from '../api/utils/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: responseCallback<SourceResponse>) {
        super.getResp(
            new SourceRequest(),
            callback as responseCallback<ApiResponse>,
        );
    }

    getNews(e: Event, callback: responseCallback<EverythingResponse>) {
        let target = e.target as Element;
        const newsContainer = e.currentTarget as Element;
        const savedSourceId = localStorage.getItem('currentSource');

        while (target !== newsContainer || target.id === 'search') {
            if (target.classList.contains('source__item') || savedSourceId) {
                let sourceId = target.getAttribute('data-source-id');
                if (sourceId && sourceId !== savedSourceId) {
                    localStorage.setItem('currentSource', sourceId);
                } else {
                    sourceId = savedSourceId;
                }

                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    const searchField = document?.getElementById('search') as HTMLInputElement;
                    const request = new EverythingRequest({ sources: sourceId });
                    if (searchField?.value) {
                        console.log(searchField?.value);
                        request.options.q = searchField?.value;
                    }
                    super.getResp(
                        request,
                        callback as responseCallback<ApiResponse>,
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
