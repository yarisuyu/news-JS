import Article from '../../api/articles/article';
import './news.css';

class News {
    draw(data: Array<Article>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newItem = newsClone.querySelector('.news__item');
                if (newItem) {
                    newItem.classList.add('alt');
                }
            }

            (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;

            const author = newsClone.querySelector('.news__meta-author');
            if (author) {
                author.textContent = item.author || item.source.name;
            }

            const date = newsClone.querySelector('.news__meta-date');
            if (date) {
                date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const descTitle = newsClone.querySelector('.news__description-title');
            if (descTitle) {
                descTitle.textContent = item.title;
            }

            const descSource = newsClone.querySelector('.news__description-source');
            if (descSource) {
                descSource.textContent = item.source.name;
            }

            const descContent = newsClone.querySelector('.news__description-content');
            if (descContent) {
                descContent.textContent = item.description;
            }

            const readMoreLink = newsClone.querySelector('.news__read-more a');
            if (readMoreLink) {
                readMoreLink.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsElement = document.querySelector('.news');
        if (newsElement) {
            newsElement.innerHTML = '';
            newsElement.appendChild(fragment);
        }
    }
}

export default News;
