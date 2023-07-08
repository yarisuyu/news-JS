import Source from "../sources/source";

interface Article {
  // The identifier id and a display name name for the source this article came from.
  source: Source;

  // The author of the article
  author: string;

  // The headline or title of the article.
  title: string;

  // A description or snippet from the article.
  description: string;

  // The direct URL to the article.
  url: string;

  // The URL to a relevant image for the article.
  urlToImage: string;

  // The date and time that the article was published, in UTC (+000)
  publishedAt: string;

  // The unformatted content of the article, where available. This is truncated to 200 chars.
  content: string;
}

export default Article;