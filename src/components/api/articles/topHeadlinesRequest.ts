import ApiRequest from '../apiRequest';
import { Category, Country, Endpoint } from '../utils/types';

class TopHeadlinesRequest implements ApiRequest {
  endpoint: Endpoint;

  options: {
    // The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options: aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza.
    // Note: you can't mix this param with the sources param.
    country?: Country;

    // The category you want to get headlines for. Possible options: businessentertainmentgeneralhealthsciencesportstechnology. Note: you can't mix this param with the sources param.
    category?: Category;

    // A comma-seperated string of identifiers for the news sources or blogs you want headlines from. Use the /top-headlines/sources endpoint to locate these programmatically or look at the sources index.
    // Note: you can't mix this param with the country or category params.
    sources?: string;

    // Keywords or a phrase to search for.
    q?: Array<string> | string;

    // The number of results to return per page (request). 20 is the default, 100 is the maximum.
    pageSize?: number;

    //  Use this to page through the results if the total results found is greater than the page size.
    page?: number;
  };

  constructor(options: { sources: string }) {
    this.options = options;
    this.endpoint = Endpoint.TOP_HEADLINES;
  }
};

export default TopHeadlinesRequest;
