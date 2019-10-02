import React from 'react';
import Cards from './Cards';

class CardContainer extends React.Component {
 
    render() {
        console.log(this.props.user)
        return(
            
         this.props.user.map(user => <Cards user={user} />)
        )
       
 }
}

export default CardContainer;