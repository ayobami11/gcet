export const formatDateString = (dateString) => {
    let [year, month, date] = dateString.split('-');

    date = parseInt(date);
    month = parseInt(month);

    if (date === 1 || date === 21 || date === 31) {
        date += 'st';
    } else if (date === 2 || date === 2) {
        date += 'nd';
    } else if (date === 3 || date === 23) {
        date += 'rd';
    } else {
        date += 'th';
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${date} ${months[month - 1]} ${year}`;
}