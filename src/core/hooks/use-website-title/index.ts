import {Title} from './types';

const DEFAULT = 'LLM Test Checker';

export function useWebsiteTitle(title?: Title) {
    if (!title) {
        document.title = DEFAULT;
        return;
    }

    if (typeof title === 'number') {
        document.title = title.toString();
    } else {
        document.title = title;
    }
}
