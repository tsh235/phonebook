import {deleteControl, formControl, modalControl} from './modules/control.js';
import features from './modules/features.js';
import {renderContacts, renderPhoneBook} from './modules/render.js';
import * as storage from './modules/serviceStorage.js';

const {hoverRow, sortTable} = features;
{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const data = storage.getStorage(title);

    const {
      table,
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = renderPhoneBook(app, title);

    // Функционал
    const allRow = renderContacts(title, list, data);
    const {closeModal} = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(title, btnDel, list);
    sortTable(table, list);
    formControl(title, form, list, closeModal);
  };

  window.phoneBookInit = init;
}
