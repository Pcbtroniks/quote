import { reactive } from 'vue';

// Main Objects
export const QuoteProgress = reactive({
    season: 'low',
    hotels: [],
    tours: [],
    nPackTours: 0,
    nTours:[],
    tour: {
        activity: 0,
        pickup: "12:00",
        hotel: null,

    },
    resume: {
        total: {
            adults: 0,
            minors: 0,
        }
    },
    prices: {
        totalPublicPrice: 0,
        totalAgencyPrice: 0,
        reference: 0,
        cost: {
            adult: 0,
            minor: 0,
        },
        profit: {
            percentage: 5,
            amount: 0
        }
    }
});


// Fetch Data
export const getTours = async () => {
    
    const res = await fetch(route('tours'));
    QuoteProgress.tours = await res.json();

}

// Helpers
export const Today = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

export const parseQuoteType = (ReservationTypeId) => {
    const types = ['no especificada', 'entrada', 'tour', 'paquete'];
    return types[ReservationTypeId] ?? 'invalida';
}

export const getSeason = (Date) => {
    const isHigh = ['2022-12-26','2022-12-27','2022-12-28', '2022-12-29', '2022-12-30', '2022-12-31'];
    return isHigh.includes(Date) ? 'high' : 'low';
}