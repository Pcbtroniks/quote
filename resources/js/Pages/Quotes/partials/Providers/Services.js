import { reactive } from 'vue';

// Main Objects
export const QuoteProgress = reactive({
    season: 'low',
    hotels: {
        cancun: null,
        pdc: null,
        rm: null
    },
    cancunHotels: null,
    rmHotels: null,
    tours: [],
    nPackTours: 2,
    nTours:[],
    tour: {
        activity: 0,
        pickup: null,
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

    return await HttpGet(route('hotels', {'zone': zone} ));
    
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

    return await fetchPickup( activity, hotel );
}

export const getActivityPickup = async ( key, activity, hotel ) => {
    if(!activity || !hotel ){
        console.warn(`acticity( ${activity} )  or hotel( ${hotel} ) invalid:`);
        return '00:00:00'
    } 
    QuoteProgress.nTours[key].pickup = await getPickup(activity, hotel).then(data => data.pickup_time) ?? '00:00:00';

}

export const getSeason = (Date) => {
    const isHigh = ['2022-12-26','2022-12-27','2022-12-28', '2022-12-29', '2022-12-30', '2022-12-31'];
    return isHigh.includes(Date) ? 'high' : 'low';
}

export const getPrice = async (activity, zone, season) => {

    const res = await fetch(route('prices', { activity, zone, season }))
    return await res.json();

}

export const loadHotels = async ( zone ) => {

    if(zone == 1 && !QuoteProgress.hotels.cancun){
        QuoteProgress.hotels.cancun = [...await fetchHotels(1)];
        return QuoteProgress;
    } else if(zone == 1 && QuoteProgress.hotels.cancun) {
        return QuoteProgress;
    }

    if(zone == 2 && !QuoteProgress.hotels.rm) {
        QuoteProgress.hotels.rm = [...await fetchHotels(2)];
        return QuoteProgress;
    } else if(zone == 2 && QuoteProgress.hotels.rm) {
        return QuoteProgress;
    }

    if(zone == 3 && !QuoteProgress.hotels.pdc) {
        QuoteProgress.hotels.pdc = [...await fetchHotels(3)];
        return QuoteProgress;
    } else if(zone == 3 && QuoteProgress.hotels.pdc) {
        return QuoteProgress;
    }

    return QuoteProgress;
}