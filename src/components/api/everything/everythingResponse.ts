import ApiResponse from '../apiResponse';
import Article from '../articles/article';

interface EverythingResponse extends ApiResponse {
    // The total number of results available for your request. Only a limited number are shown at a time though, so use the page parameter in your requests to page through them.
    totalResults: number;

    // The results of the request.
    articles: Array<Article>;
}

export default EverythingResponse;
