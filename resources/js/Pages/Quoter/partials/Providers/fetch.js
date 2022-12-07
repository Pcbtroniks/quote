const httpGET = async (URL, PARAMS) => {

    try {
        
        const response = await fetch(URL, PARAMS);
        return await response.json();

    } catch (error) {

        console.warn(error);
        return null;
        
    } 

}

const fetchTours = async ()