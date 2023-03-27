import { Dialog } from "../entities";
import { DialogsMap } from  "@/front/renderer/store/dialog"

export function loadTestDialogs(): DialogsMap {
  const allFilesMap = new DialogsMap();
  const firstDialog = new Dialog(1, "SomeTitle1");
  for (let i = 0; i < 15; i++)
  {
    firstDialog.addNewMessage(`Some text to test this function ${i}`);
  }
  firstDialog.addNewMessage('Some text to test this function 2 Some text to test this function 2' +
  'Some text to test this function 2 Some text to test this function 2 Some text to test this function' +
  '2 Some text to test this function 2 Some text to test this function 2 Some text to test this function 2');

  const secondDialog = new Dialog(2, "Small puppy stories");
  secondDialog.addNewMessage('Far-far away in little house');
  secondDialog.addNewMessage('Were a little cute puppy');

  allFilesMap.set(firstDialog.id, firstDialog);
  allFilesMap.set(secondDialog.id, secondDialog);
    
  allFilesMap.set(3, new Dialog(3, "Test dialog 1"));
  allFilesMap.set(4, new Dialog(4, "Test dialog 2"));
  allFilesMap.set(5, new Dialog(5, "Test dialog 3"));
  allFilesMap.set(6, new Dialog(6, "Test dialog 4"));
  allFilesMap.set(7, new Dialog(7, "Test dialog 5"));
  allFilesMap.set(8, new Dialog(8, "Test dialog 6"));
  allFilesMap.set(9, new Dialog(9, "Test dialog 7"));
  allFilesMap.set(10, new Dialog(10, "Test dialog 8"));
  allFilesMap.set(11, new Dialog(11, "Test dialog 9"));
  allFilesMap.set(12, new Dialog(12, "Test dialog 10"));
  allFilesMap.set(13, new Dialog(13, "Test dialog 11"));
  allFilesMap.set(14, new Dialog(14, "Test dialog 12"));
  allFilesMap.set(15, new Dialog(15, "Test dialog 13"));
  allFilesMap.setNew(16, new Dialog(16, "Test dialog 14"));

  return allFilesMap;
}