import {createRow} from './createElements.js';
import {removeStorage, setStorage} from './serviceStorage.js';

export const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.remove('is-visible');
    });

    formOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', openModal);

  formOverlay.addEventListener('click', ({target}) => {
    if (target === formOverlay || target.closest('.close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

export const deleteControl = (title, btnDel, list) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', ({target}) => {
    if (target.closest('.del-icon')) {
      const row = target.closest('.contact');
      const phone = row.querySelector('.phone').textContent;
      removeStorage(title, phone);
      row.remove();
    }
  });
};

export const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

export const formControl = (title, form, list, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);

    addContactPage(newContact, list);
    setStorage(title, newContact);

    form.reset();
    closeModal();
  });
};
