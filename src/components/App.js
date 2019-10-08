import React, { useState } from 'react'; // gives us access to state in our functional component
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    //  1st element = present value of state, like this.state.resource
    //  2nd element = a setter function, allows us to update state, like setState({ resource: 'posts' })
    //  3rd element = useState function, native to React
    //  4th element = initialValue, like state = { resource: 'posts' }   
    const [resource, setResource] = useState('posts'); // array destructuring  
    // another example const [currentCount, setCount] = useState(0); could be used to create a counter

    return(
        <div>
            <UserList />
            <div>
                {/* These set resource every click */}
                <button onClick={() => setResource('posts')} >Posts</button> 
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            {/* pass down resource as props */}
            <ResourceList resource={resource} /> 
        </div>
    
    );        
};

export default App;