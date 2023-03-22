export function trimTextBeforeSave (text: string) {
    if (text == null || text == undefined)
    {
        return text;
    }
    return text.trim();
}