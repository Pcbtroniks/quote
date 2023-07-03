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