import ApiRequest from "../apiRequest";
import { Language, Endpoint, SortBy, SearchIn } from "../utils/types";

class EverythingRequest implements ApiRequest {
  endpoint: Endpoint;

  options: {
    // Keywords or phrases to search for in the article title and body.
    // Advanced search is supported here:
    //     Surround phrases with quotes (") for exact match.
    //     Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
    //     Prepend words that must not appear with a - symbol. Eg: -bitcoin
    //     Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
    // The complete value for q must be URL-encoded. Max length: 500 chars.
    q?: string;

    // The fields to restrict your q search to.
    // Multiple options can be specified by separating them with a comma, for example: title,content.
    // This parameter is useful if you have an edge case where searching all the fields is not giving the desired outcome, but generally you should not need to set this.
    // Default: all fields are searched.
    searchIn?: SearchIn;

    // A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from.
    //  Use the /sources endpoint to locate these programmatically or look at the sources index.
    sources: string;

    // A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.
    domains?: string;

    // A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.
    excludeDomains?: string;

    // A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2023-07-08 or 2023-07-08T11:19:15)
    // Default: the oldest according to your plan.
    from?: string;

    // A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2023-07-08 or 2023-07-08T11:19:15)
    // Default: the newest according to your plan.
    to?: string;

    // The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ardeenesfrheitnlnoptrusvudzh.
    // Default: all languages returned.
    language?: Language;

    // The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
    // Default: publishedAt
    sortBy?: SortBy;


    // The number of results to return per page.
    // Default: 100. Maximum: 100.
    pageSize?: number;

    // Use this to page through the results.
    // Default: 1.
    page?: number;

  };

  constructor(options: { sources: string }) {
    this.options = options;
    this.endpoint = Endpoint.EVERYTHING;
  }

};

export default EverythingRequest;
