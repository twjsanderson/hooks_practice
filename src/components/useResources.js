import { useState, useEffect } from 'react';
import axios from 'axios';

//  create a function that deals with all the reusable logic and can be called in the actual componenet below
const useResources = (resource) => {
    const [resources, setResources] = useState([]); // creates state with variable resources

    useEffect(() => {
        (async resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            
            setResources(response.data);
        })(resource);
    }, [resource])

    return resources
};

export default useResources;