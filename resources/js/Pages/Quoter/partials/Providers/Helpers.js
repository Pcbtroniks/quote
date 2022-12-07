// Quotes

export const zoneToString = (ZoneID) => {

    const zones = {
        1:'cancun',
        2:'rm',
        3:'pdc',
    }

    return zones[ZoneID];
}

// Dates

export const Today = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

export const parseQuoteType = (ReservationTypeId) => {
    const types = ['no especificada', 'entrada', 'tour', 'paquete'];
    return types[ReservationTypeId] ?? 'invalida';
}


// Numbers

export const fixedAdd = ( n1, n2 ) => {
    return Number(Number(n1) + Number(n2)).toFixed(2);
}

export const hasAmount = (n) => {
    return n > 0 ? '$' + n  : ''
}