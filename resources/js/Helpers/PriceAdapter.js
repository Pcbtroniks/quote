/**
 * From an array of prices, returns an object with the prices sorted by zone
 * @param {Price} prices
 * [{  
 *  "id": 81,  
 *  "amount": "153.99",  
 *  "activity_id": 11,  
 *  "zone_id": 1,  
 *  "season": "low",  
 *  "type": "adult",  
 *  "created_at": "2022-10-25T04:00:00.000000Z",  
 *  "updated_at": "2023-06-14T21:04:36.000000Z"  
 *}]
 * @returns  {Object} pricesByZone
 */

export const sortPricesByzone = (prices) => {
    if(!prices || prices.length == 0) {
        console.log('no prices')
        return false;
    };
    const pricesByZone = {
        cancun: [],
        rm: [],
        pdc: [],
    };
    prices.forEach((price) => {
        if (price.zone_id == 1) {
            pricesByZone.cancun = [ ...pricesByZone.cancun, price] ;
        } else if (price.zone_id == 2) {
            pricesByZone.rm = [...pricesByZone.rm, price];
        } else if (price.zone_id == 3) {
            pricesByZone.pdc = [...pricesByZone.pdc, price];
        }
    });

    return pricesByZone;
};