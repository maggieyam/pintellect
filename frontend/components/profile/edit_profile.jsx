import React from 'react';
import {hide, reveal} from "../../utils/drop_down_util";

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = this.props.user;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state)
        .then(
        () => {          
            reveal('.saved');
            setTimeout(() => 
                this.props.history.push(`/${this.state.username}/_saved`)
                , 1500);
            
        })  
    }

    update(field) {   
        return e => {                      
            this.setState({[field]: e.currentTarget.value});    
        }    
    }

    reset() {
        this.setState(this.props.user);
    }

    render() {
        const { first_name, last_name, username, description, location, url, photo } = this.state;
        return(
            <div className='profile-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <div className='profile-header'>  
                        <div>                       
                            <h1>
                                Edit profile
                            </h1>
                            <p>People on Pinterest will get to know you with the info below</p>
                        </div>   
                        <div className="profile-edit-btns">
                            <button type="reset" id ="cancel" onClick={() => this.reset()}>Cancel</button>
                            <button  id="save" >Done</button>
                        </div>              
                    </div>
                    <div className="profile-body">
                        <div className="profile-img">
                            {photo ? <img src={photo}/> :  null} 
                            {/* <button type="button">Change</button> */}
                        </div>
                        <div className="name-wrapper">
                            <div>
                                <p>First name</p>
                                <input 
                                    type="text" 
                                    value={first_name} 
                                    placeholder="e.g. Jo" 
                                    onChange={this.update('first_name')}
                                />
                            </div>
                            <div>
                                <p>Surname</p>
                                <input 
                                    type="text" 
                                    value={last_name} 
                                    placeholder="e.g. Smith" 
                                    onChange={this.update('last_name')}
                                />
                            </div>
                        </div>
                        
                        <p>Username</p>
                            <input 
                                type="text" 
                                value={username}
                                onChange={this.update('username')} />
                        <p>About your profile</p>
                        <textarea 
                            placeholder="Write a little bit about yourself here" 
                            value={description} 
                            onChange={this.update('description')}>
                        </textarea>
                        <p>Website URL</p>
                        <input 
                            type="text"  
                            value={url}
                            onChange={this.update('url')}/>
                        <p>Location</p>
                        <input 
                            type="text" 
                            placeholder="Ex. San Francisco, CA"
                            value={location}
                            onChange={this.update('location')}
                        />
                    </div>
                    
                    <div className="saved">Profile saved!</div>
                </form>
            </div>
        )
    }
}

export default EditProfileForm;