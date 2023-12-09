import {
  createBtnsGroup,
  createFooter,
  createForm,
  createHeader,
  createLogo,
  createMain,
  createRow,
  createTable,
} from './createElements.js';

export const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createLogo(title);
  const main = createMain();
  const footer = createFooter(title);
  const btnGroup = createBtnsGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = createTable();
  const {form, overlay} = createForm();

  header.headerContainer.append(logo);
  main.mainContainer.append(btnGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);

  return {
    table,
    list: table.tbody,
    logo,
    btnAdd: btnGroup.btns[0],
    btnDel: btnGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

export const renderContacts = (key, elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};
