const SHORT_PREVIEW_CHARS_COUNT = 25;
const SHORT_PREVIEW_END_CHARS = '...';

export class Item {
  public shortPreview?: String;
  public dateLastUpdated = new Date();

    constructor(public id: number, public title: string) {}

    setNewPreview(text: string): string {
        let newPreview = createShortPreview(text);
        this.shortPreview = newPreview;
        this.dateLastUpdated = new Date();
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