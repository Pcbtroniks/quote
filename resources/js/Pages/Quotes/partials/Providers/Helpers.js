export const Today = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

export const parseQuoteType = (ReservationTypeId) => {
    const types = ['no especificada', 'entrada', 'tour', 'paquete'];
    return types[ReservationTypeId] ?? 'invalida';
}

export const fixedAdd = ( n1, n2 ) => {
    return Number(Number(n1) + Number(n2)).toFixed(2);
}