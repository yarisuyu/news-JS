import { Category, Language, Country } from '../utils/types';

interface Source {
    // The identifier of the news source. You can use this with our other endpoints.
    id: string;

    // The name of the news source
    name: string;

    // A description of the news source
    description: string;

    // The URL of the homepage.
    url: string;

    // The type of news to expect from this news source.
    category: Category;

    // The language that this news source writes in.
    language: Language;

    // The country this news source is based in (and primarily writes about).
    country: Country;
}

export default Source;
