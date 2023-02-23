function trimTextBeforeSave (text) {
    if (text == null || text == undefined)
    {
        return text;
    }
    return text.trim();
}