import ApiRequest from "../apiRequest";
import { Category, Country, Language } from "../utils/types";

class SourceRequest implements ApiRequest {
  endpoint: Endpoint;
  options: {
    // Find sources that display news of this category. Default: all categories.
    category?: Category;

    // Find sources that display news in a specific language. Default: all languages.
    language?: Language;

    // Find sources that display news in a specific country.  Default: all countries.
    country?: Country;
  };

  constructor() {
    this.endpoint = 'sources';
    this.options = { };
  }
};

export default SourceRequest;