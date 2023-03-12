const SHORT_PREVIEW_CHARS_COUNT = 15;
const SHORT_PREVIEW_END_CHARS = '...';

export class Item {
    constructor(public id: number, public title: string, public shortPreview: string) {}

    setNewPreview(text: string): string {
        let newPreview = createShortPreview(text);
        this.shortPreview = newPreview;
        return newPreview;
    }
}

function createShortPreview(text: string): string {
  if (text.length <= SHORT_PREVIEW_CHARS_COUNT)
  {
    return text;
  }
  return text.substring(0, SHORT_PREVIEW_CHARS_COUNT).trim() + SHORT_PREVIEW_END_CHARS;
}