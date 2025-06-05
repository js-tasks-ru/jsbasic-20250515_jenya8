function highlight(table) {
  Array.from(table.rows).forEach((row, rowIndex) => {
    if (rowIndex === 0) {
      return;
    }

    const cells = Array.from(row.cells);
    const ageCell = cells[1];
    const genderCell = cells[2];
    const statusCell = cells[3];

    if (statusCell.hasAttribute('data-available')) {
      const isAvailable = statusCell.dataset.available === 'true';
      row.classList.add(isAvailable ? 'available' : 'unavailable');
    } else {
      row.hidden = true;
    }

    const gender = genderCell.textContent.trim();

    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    const age = parseInt(ageCell.textContent, 10);

    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  });
}
