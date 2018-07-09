export function formatDate (value) {
    const td = new Date(value);
    const year = td.getFullYear();
    const month = td.getMonth()+1 < 10 ? `0${td.getMonth()+1}` : td.getMonth()+1;
    const day = td.getDate() < 10 ? `0${td.getDate()}` : td.getDate();
    return `${year}-${month}-${day}`; 
}