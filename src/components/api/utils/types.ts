import ApiResponse from '../apiResponse';

type Category = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
type Language = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
type Country =
    | 'ae'
    | 'ar'
    | 'at'
    | 'au'
    | 'be'
    | 'bg'
    | 'br'
    | 'ca'
    | 'ch'
    | 'cn'
    | 'co'
    | 'cu'
    | 'cz'
    | 'de'
    | 'eg'
    | 'fr'
    | 'gb'
    | 'gr'
    | 'hk'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'in'
    | 'it'
    | 'jp'
    | 'kr'
    | 'lt'
    | 'lv'
    | 'ma'
    | 'mx'
    | 'my'
    | 'ng'
    | 'nl'
    | 'no'
    | 'nz'
    | 'ph'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'sa'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'th'
    | 'tr'
    | 'tw'
    | 'ua'
    | 'us'
    | 've'
    | 'za';

type responseCallback<T extends ApiResponse> = (response?: T) => void;

enum Endpoint {
    SOURCES = 'sources',
    TOP_HEADLINES = 'top-headlines',
    EVERYTHING = 'everything',
}

enum SortBy {
    RELEVANCY = 'relevancy',
    POPULARITY = 'popularity',
    PUBLISHED_AT = 'publishedAt',
}

enum SearchIn {
    TITLE = 'title',
    DESCRIPTION = 'description',
    CONTENT = 'content',
}

export { Category, Language, Country, responseCallback, Endpoint, SortBy, SearchIn };
