import React from 'react';

class Cards extends React.Component {

    // console.log('CARDS render')

    render() {
        return(
            <div className='card'>
               <img src={this.props.user.avatar_url} alt='user card information'/>
               <div className='card-info'>
                    <h3 className='name'>{this.props.user.name}</h3>
                    <p className='username'>{this.props.user.user_name}</p>
                    <p>Location: {this.props.user.location}</p>
                    <p>Profile: <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
                    <p>Followers: {this.props.user.followers}</p>
                    <p>Following: {this.props.user.following}</p>
                    <p>Bio: {this.props.user.bio}</p>
               </div>
            </div>
        )
    }
}
    

export default Cards;