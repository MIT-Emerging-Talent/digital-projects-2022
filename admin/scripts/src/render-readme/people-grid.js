export const peopleGrid = (data = [], columns = 4) => {
  const learners2D = [];
  for (let i = 0; i < data.length; i += columns) {
    let nextRow = [];
    for (let j = 0; j < columns; j++) {
      nextRow.push(data[i + j]);
    }
    learners2D.push(nextRow.map((learner) => learner || null));
  }

  let table = '<table>';
  for (const dataRow of learners2D) {
    let row = '<tr>';
    for (const thing of dataRow) {
      if (thing) {
        row += `<td>\n\n${thing}\n\n</td>`;
      }
    }
    row += '</tr>';
    table += row;
  }
  table += '</table>';

  return table;
};
