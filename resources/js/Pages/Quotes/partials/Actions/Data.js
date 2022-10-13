// Dates

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
export const today = new Date().toLocaleDateString(undefined, options);


// Cost and prices

export const prices = {
    adults: 100,
    kids: 50,
    season: 'baja'
}

export const amounts = {
    public: 0,
    agency: 0,
    sugested: 0,
}

export const profit = { max: 5, calculated: 0 };


// Parks and Tours

export const parks = ['xcaret basica', 'xcaret plus', 'xcaret de noche', 'xplor dia', 'xplor fuego', 'xoximilco', 'xelha','xenxes', 'xavage basico', 'xavage all inclusive'];

export const tours = ['TOUR XCARET BASICO', 'TOUR XCARET PLUS', 'TOUR XCARET BASICO DOS DIAS', 'TOUR XCARET PLUS DOS DIAS', 'TOUR XCARET DE NOCHE', 'TOUR XCARET XCLUSIVO DE NOCHE', 'TOUR XPLOR DIA','TOUR XPLOR FUEGO', 'TOUR XELHA', 'SHUTTLE XELHA', 'TOUR TULUM XELHA','TOUR COBA XELHA', 'TOUR XOXIMILCO', 'TOUR XIXEN CLASICO', 'TOUR XIXEN DE LUJO', 'TOUR XENOTES', 'TOUR XENSES', 'TOUR TULUM XENSES', 'TOUR TULUM COBA', 'TOUR XAVAGE BASICO', 'TOUR XAVAGE ALL INCLUSIVE', 'DOLPHINE RIDE'];