const hoverRow = (allRow, logo) => {
  const text = logo.textContent;
  allRow.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};

const sortTable = (table, list) => {
  const sortTh = [
    table.querySelector('.firstName'),
    table.querySelector('.surName'),
  ];
  const rows = [...list.rows];

  sortTh.forEach(th => {
    th.addEventListener('click', () => {
      const columnIndex = th.cellIndex;
      const sortDirection = 'asc';

      rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent;
        const bValue = b.cells[columnIndex].textContent;

        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return bValue > aValue ? 1 : -1;
        }
      });

      rows.forEach(row => list.append(row));
    });
  });
};

export default {
  hoverRow,
  sortTable,
};
