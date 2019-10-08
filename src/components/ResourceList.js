import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
   const resources = useResources(resource);

    return (
        <ul>
            {resources.map(record => 
                <li key={record.id}>{record.title}</li>
            )}
        </ul>
    );
};

export default ResourceList;





// // this has the logic inside the function not separated

// //  or we could use older method of props as argument
// const ResourceList = ({ resource }) => {
//     const [ resources, setResources ] = useState([]);

//     const fetchResource = async (resource) => {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            
//         setResources(response.data);
//     };

//     // replaces componentDidMount and componentDidUpdate
//     // the 2nd argument in [] represents the props passed down from App
//     // if that changes value from 'posts' to 'todos', useEffect knows and calls fetchResource()
//     // allows us to block updates to our state when we dont want them to run
//     useEffect(() => {
//        fetchResource(resource) 
//     }, [resource]);

//     // if you dont put in a second arguement into useEffect, it will be called every time
//     // if you pass 2 fully formed objects (NOT references) like [{color: 'red'}] it will see them as
//     // a brand new object and rerender, much like redux if you pass a new object it will accept it and rerender
    
//     // can't use useEffect with aysnc function inside or one that returns a promise
//     // we must call the function inside useEffect like shown above OR
//     // we can wrap the function inside useEffect and invoke immediately like shown below with resource

//     // useEffect(() => {
//     //     (async resource => {
//     //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            
//     //         setResources(response.data);
//     //     })(resource);
//     // }, [resource])



//     return (
//         <div>{resources.map(record => <li key={record.id}>{record.title}</li>)}</div>
//     );
// }

// export default ResourceList;


// Class based solution below

// class ResourceList extends React.Component {
//     state = { resources: [] };

//     async componentDidMount() {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        
//         this.setState({ resources: response.data });
//     }

//     // componentDidUpdate called anytime our parent component is rerendered or setState is called in this component
//     // we can use prevProps, which shows us what the previous satte of props is
//     // we use prevProps to prevent constant rerendering

//     async componentDidUpdate(prevProps) {
//         if (prevProps.resource !== this.props.resource) {
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
            
//             this.setState({ resources: response.data });
//         }
//     }


//     render() {
//         return (
//             <div>{this.state.resources.length}</div>
//         );
//     }
// }

// export default ResourceList;