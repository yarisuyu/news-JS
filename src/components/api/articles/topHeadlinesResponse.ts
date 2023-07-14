import ApiResponse from '../apiResponse';
import Article from './article';

interface TopHeadlinesResponse extends ApiResponse {
    // The total number of results available for your request.
    totalResults: number;

    // The results of the request.
    articles: Array<Article>;
}

export default TopHeadlinesResponse;
