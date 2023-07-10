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
        const searchField = document?.getElementById('search') as HTMLInputElement;
        let searchText;
        if (searchField?.value) {
            searchText = searchField?.value.trim();
        }

        while (target !== newsContainer || target?.id === 'search') {
            if (target?.classList?.contains('source__item') || target?.id === 'search') {
                let sourceId = target?.getAttribute('data-source-id');
                const previousSourceId = newsContainer?.getAttribute('data-source');

                if (target?.id === 'search') {
                    sourceId = previousSourceId;
                }

                if (sourceId && previousSourceId !== sourceId) {
                    newsContainer?.setAttribute('data-source', sourceId);
                    const request = new EverythingRequest({ sources: sourceId });
                    if (searchText) {
                        request.options.q = searchText;
                    }
                    super.getResp(
                        request,
                        callback as responseCallback<ApiResponse>,
                    );
                }
                return;
            }
            target = target?.parentNode as HTMLElement;
        }
    }
}

export default AppController;
