import React from 'react';
import Cards from './Cards';

class CardContainer extends React.Component {
    constructor(props) {
        super(props) 
    }
    render() {
        return(
            <div>
            this.props.map(user => <Cards user={user} />
            </div>
        )
    }
}