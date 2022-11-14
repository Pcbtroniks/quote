export const Today = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

export const parseQuoteType = (ReservationTypeId) => {
    const types = ['no especificada', 'entrada', 'tour', 'paquete'];
    return types[ReservationTypeId] ?? 'invalida';
}