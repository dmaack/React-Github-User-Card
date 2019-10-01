import React from 'react';
import Cards from './Cards';

class CardContainer extends React.Component {
    // constructor(props) {
    //     super(props); 
    // }
    render() {
        return(
            
         this.props.user.map(user => <Cards user={user} />)
        )
 }
}

export default CardContainer;