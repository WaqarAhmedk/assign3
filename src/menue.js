import React from 'react';

function Menue(props){

    return(
        <div>
            <html>
                <head>
                    
                    <title>Food Order</title>
                </head>
                <body>
            <hr/>
            <h1>This list is from child component</h1>
            <h2>Order your food from the list please </h2>
    <h2>You ordered {props.d1} from the list of parent in child component</h2>
    <h2>You ordered {props.d4}  from the list of parent in child component</h2>
            <hr/>
        </body>
    
</html>
</div>
    );
}
export default Menue;