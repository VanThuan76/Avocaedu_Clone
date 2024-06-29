export function parseDescriptionCourseStyleOne(data: string, maxLength: number = 70) {
    let firstListItemContent = '';
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const firstListItem = doc.querySelector('li');
    if (firstListItem) {
        firstListItemContent = firstListItem.textContent || '';
        if (firstListItemContent.length > maxLength) {
            firstListItemContent = firstListItemContent.slice(0, maxLength) + '...';
        }
    }
    return firstListItemContent;
}

export function parseDescriptionCourseStyleTwo(data: string, maxLength: number = 70) {
    let firstListItemContent = '';
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const firstListItem = doc.querySelector('p');
    if (firstListItem) {
        firstListItemContent = firstListItem.textContent || '';
        if (firstListItemContent.length > maxLength) {
            firstListItemContent = firstListItemContent.slice(0, maxLength) + '...';
        }
    }
    return firstListItemContent;
}
