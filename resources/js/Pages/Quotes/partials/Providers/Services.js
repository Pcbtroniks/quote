import { reactive } from 'vue';

// Main Objects
export const QuoteProgress = reactive({
    season: 'low',
    hotels: {
        cancun: null,
        rm: null
    },
    cancunHotels: null,
    rmHotels: null,
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

export const Activity = {
    activity: null,
    date: null,
    hotel: null,
    pickup: null,
}


// Fetch Data asd

const HttpGet = async (URL, Options = null)  => {
    const response = await fetch(URL, Options);
    return await response.json();
}

export const getTours = async () => {
    
    const res = await fetch(route('tours'));
    QuoteProgress.tours = await res.json();

}

export const fetchHotels = async ( zone ) => {

    return await HttpGet(route('hotels', {'zone': zone == 1  ? zone : 2} ));
    
}

export const getHotels = async ( zone ) => {

    const hotels = QuoteProgress.hotels = await fetchHotels( zone );
    return  hotels;

}

export const fetchPickup = async ( activity, hotel ) => {
    const response = await fetch(route('nd.pickup.get', { activity, hotel }));
    return await response.json();
}

export const getPickup = async ( activity, hotel ) => {
    if(!activity || !hotel ) return null;
    return await fetchPickup( activity, hotel );
}

export const getSeason = (Date) => {
    const isHigh = ['2022-12-26','2022-12-27','2022-12-28', '2022-12-29', '2022-12-30', '2022-12-31'];
    return isHigh.includes(Date) ? 'high' : 'low';
}

export const getPrice = async (activity, zone, season) => {

    const res = await fetch(route('prices', { activity, zone, season }))
    return await res.json();;

}

export const loadHotels = async ( zone ) => {

    if(zone == 1 && !QuoteProgress.hotels.cancun){
        QuoteProgress.hotels.cancun = [...await fetchHotels(1)];
        console.log('cargar Cancun Hoteles');
    } else if(QuoteProgress.hotels.cancun) {
        console.log('Cancun ya tiene Hoteles cargados');
        return QuoteProgress;
    }

    if((zone == 2 || zone == 3) && !QuoteProgress.hotels.rm) {
        QuoteProgress.hotels.rm = [...await fetchHotels(2)];
        console.log('cargar R.M. y P.D.C Hoteles');
    } else if(QuoteProgress.hotels.rm) {
        console.log('R.M. y P.D.C ya tiene Hoteles cargados');
        return QuoteProgress;
    }

    return QuoteProgress;
}