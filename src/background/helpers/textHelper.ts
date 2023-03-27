export function trimTextBeforeSave (text: string) {
    if (!text)
    {
        return text;
    }
    return text.trim();
}

export function formatDate(date: Date): string {
    if (!date)
    {
        return date;
    }
    return `${date.toLocaleString()}`;
}