import { TemplateLiteral } from 'typescript';
import Source from '../../api/sources/source';
import './sources.css';

class Sources {
    draw(data: Array<Source>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item: Source) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as HTMLElement;

            const itemName = sourceClone.querySelector('.source__item-name');
            if (itemName) {
                itemName.textContent = item.name;
            }

            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources');
        if (sources) {
            sources.append(fragment);
        }
    }
}

export default Sources;
