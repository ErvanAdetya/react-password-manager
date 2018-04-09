const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const ddMonthYYY_Format = (inputDate) => {
  if(inputDate === 'Created At' || inputDate === 'Updated At') { return inputDate }
  if(inputDate) {
    let d = new Date(inputDate);
    let curr_date = d.getDate();
    let curr_month = d.getMonth() - 1;
    let curr_year = d.getFullYear();
    return curr_date + " " + monthNames[curr_month] + " " + curr_year;
  }
  return '';
}