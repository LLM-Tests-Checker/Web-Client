import {Indexed} from '../types/common';

export function makeQueryParams(query?: Indexed): string {
    if (!query) {
        return '';
    }

    return Object.entries(query).reduce((acc: string, [key, value]) => {
        return `${acc}${key}=${JSON.stringify(value)}&`;
    }, '?');
}

export function sortEntitiesByNumber(entities: any[]): any[] {
    return entities.sort((lhs, rhs) => {
        const lhsNum = lhs['number'] || 0;
        const rhsNum = rhs['number'] || 0;
        return lhsNum - rhsNum;
    })
}
