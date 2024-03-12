export function makeQueryParams(query?: Object): string {
    if (!query) {
        return '';
    }

    return Object.entries(query).reduce((acc: string, [key, value]) => {
        return `${acc}${key}=${JSON.stringify(value)}&`;
    }, '?');
}
