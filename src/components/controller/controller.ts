import ApiResponse from '../api/apiResponse';
import EverythingRequest from '../api/everything/everythingRequest';
import EverythingResponse from '../api/everything/everythingResponse';
import SourceRequest from '../api/sources/sourceRequest';
import SourceResponse from '../api/sources/sourceResponse';
import { responseCallback } from '../api/utils/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: responseCallback<SourceResponse>) {
        super.getResp(new SourceRequest(), callback as responseCallback<ApiResponse>);
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
                const previousSourceId = localStorage.getItem('currentSourceId');
                let isSearchClick;

                if (target?.id === 'search') {
                    isSearchClick = true;
                    sourceId = previousSourceId;
                } else if (sourceId && previousSourceId !== sourceId) {
                    localStorage.setItem('currentSourceId', sourceId);
                    if (target.parentElement) {
                        const prevCurrent = Array.from(target.parentElement.children).filter((item) =>
                            item.classList.contains('current')
                        );
                        prevCurrent.forEach((item) => item.classList.remove('current'));
                    }
                    target.classList.add('current');
                }

                if (sourceId && (previousSourceId !== sourceId || isSearchClick)) {
                    newsContainer?.setAttribute('data-source', sourceId);
                    const request = new EverythingRequest({ sources: sourceId });
                    if (searchText) {
                        request.options.q = searchText;
                    }
                    super.getResp(request, callback as responseCallback<ApiResponse>);
                }
                return;
            }
            target = target?.parentNode as HTMLElement;
        }
    }
}

export default AppController;
