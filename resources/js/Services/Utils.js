//Zones

import { Inertia } from "@inertiajs/inertia";

export const zoneToALias = (ZoneID) => {

    const zones = {
        1:'cancun',
        2:'rm',
        3:'pdc',
    }

    return zones[ZoneID] ?? zones[1];
}

export const getZones = (ZoneID) => {
    
    const zones = [
        {id: 1, name: 'Cancun'},
        {id: 2, name: 'Riviera Maya'},
        {id: 3, name: 'Playa del Carmen'},
    ]

    return  ZoneID 
            ? zones[ZoneID] ?? zones[1] 
            : zones;
}

export const ParsePlayaDelCarmenToCancun = ($Zone) =>{
    
    return $Zone = $Zone == 2 
            ? 1 
            : $Zone;
}

export const zoneIdToZoneName = (zoneId) => {
    
    const zones = {
        1: 'Cancun',
        2: 'Riviera Maya',
        3: 'Playa del Carmen',
    
    }
    return zones[zoneId] ?? 'N/D';
}

export const getActivityNameById = (activityID, activityList) => {

    const activity = activityList.find(tour => tour.id == activityID);
    return activity?.name ?? 'N/D';
}


// Date and Time
/**
 * Format pickup_time to HH:MM  i.e. 5:10 to 05:10
 * 
 * @param {string} pickup_time
 * @returns {string} formatted pickup_time 
 */
export const formatPickupTime = (pickup_time) => {
    if(pickup_time === undefined || pickup_time === ''){
        return '';
    }

    pickup_time = pickup_time.trim();

    const [hours, minutes] = pickup_time.split(':');
    const formattedHours = hours.length === 1 ? `0${hours}` : hours;
    const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
}

/**
 * Validate if pickup_time is in format HH:MM or H:MM
 * @param {string} pickup_time
 * @returns {boolean} true if pickup_time is in format HH:MM or H:MM
*/
export const validatePickupTime = (pickup_time) => {
    const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(pickup_time);
}

// Page

export const ReloadPage = (Delay = 3000) => {
    if (Delay) {
        setTimeout(() => {
            location.reload();
        }, Delay);
    } else {
        location.reload();
    }
}