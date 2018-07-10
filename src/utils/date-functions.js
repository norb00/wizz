import moment from 'moment'

export function formatDate (value) {
    return moment(value).format('YYYY-MM-DD');
}

export function formatFullDate (value) {
    return moment(value).format('YYYY-MM-DD HH:mm');
}

