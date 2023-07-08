import ApiRequest from '../api/apiRequest';
import ApiResponse from '../api/apiResponse';
import TopHeadlinesResponse from '../api/articles/topHeadlinesResponse';
import EverythingRequest from '../api/everything/everythingRequest';
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

    getNews(e: Event, callback: responseCallback<TopHeadlinesResponse>) {
        let target = e.target as Element;
        const newsContainer = e.currentTarget as Element;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        new EverythingRequest({ sources: sourceId }),
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
