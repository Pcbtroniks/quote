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

export const fetchHotels = async ( zone ) => 
{
    return await HttpGet(route('hotels', {'zone': zone}));   
}

export const loadHotels = async ( zone, hotelList = {}) => {

    if(zone == 1 && !hotelList.cancun){
        hotelList.cancun = [await fetchHotels(1)];
        return hotelList;
    } else if(zone == 1 && hotelList.cancun) {
        return hotelList;
    }

    if(zone == 2 && !hotelList.rm) {
        hotelList.rm = [await fetchHotels(2)];
        return hotelList;
    } else if(zone == 2 && hotelList.rm) {
        return hotelList;
    }

    if(zone == 3 && !hotelList.pdc) {
        hotelList.pdc = [await fetchHotels(3)];
        return hotelList;
    } else if(zone == 3 && hotelList.pdc) {
        return hotelList;
    }

    return hotelList;
}