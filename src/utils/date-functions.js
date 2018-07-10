export function formatDate (value) {
    const td = new Date(value);
    const year = td.getUTCFullYear();
    const month = td.getUTCMonth()+1 < 10 ? `0${td.getUTCMonth()+1}` : td.getUTCMonth()+1;
    const day = td.getUTCDate() < 10 ? `0${td.getUTCDate()}` : td.getUTCDate();
    return `${year}-${month}-${day}`;
}

export function formatFullDate (value) {
    const td = new Date(value);
    const year = td.getUTCFullYear();
    const month = td.getUTCMonth()+1 < 10 ? `0${td.getUTCMonth()+1}` : td.getUTCMonth()+1;
    const day = td.getUTCDate() < 10 ? `0${td.getUTCDate()}` : td.getUTCDate();
    const hours = td.getUTCHours();
    const mins = td.getUTCMinutes();
    return `${year}-${month}-${day} ${hours}:${mins}`;
}

