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

// Fetch Data

const HttpGet = async (URL, Options = null, callback)  => {
    try {        
        
        const response = await fetch(URL, Options);
        return await response.json();

    } catch (error) {
        alert('Error al cargar los datos, por favor recargue la pagina');
    } finally {
        callback ? callback() : null;
    }
}

export const getTours = async () => 
{
    QuoteProgress.tours = await HttpGet(route('tours'));
}

export const fetchHotels = async ( zone ) => 
{
    return await HttpGet(route('hotels', {'zone': zone}));   
}

export const getHotels = async ( zone ) => 
{
    const hotels = QuoteProgress.hotels = await fetchHotels( zone );
    return  hotels;
}

export const getPickup = async ( activity, hotel ) => 
{
    return await HttpGet(route('nd.pickup.get', { activity, hotel }));
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

export const getPrice = async (activity, zone, season) => 
{
    return await HttpGet(route('prices', { activity, zone, season }));
}

export const loadHotels = async ( zone, hotelList = {}) => {

    if(zone == 1 && !hotelList.cancun){
        hotelList.cancun = [...await fetchHotels(1)];
        return hotelList;
    } else if(zone == 1 && hotelList.cancun) {
        return hotelList;
    }

    if(zone == 2 && !hotelList.rm) {
        hotelList.rm = [...await fetchHotels(2)];
        return hotelList;
    } else if(zone == 2 && hotelList.rm) {
        return hotelList;
    }

    if(zone == 3 && !hotelList.pdc) {
        hotelList.pdc = [...await fetchHotels(3)];
        return hotelList;
    } else if(zone == 3 && hotelList.pdc) {
        return hotelList;
    }

    return hotelList;
}