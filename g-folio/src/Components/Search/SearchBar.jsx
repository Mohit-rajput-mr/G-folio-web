import React, { useState } from 'react'; 
import searchicon from '../../assets/icons/searchicon.png';
import './SearchBar.css';
import profile from '../../assets/icons/profileicon.png';
import mail from '../../assets/icons/mailicon.png';
import bell from '../../assets/icons/bellicon.png';

const SearchBar = ({ onSearchSubmit }) => {  
    const [searchTerm, setSearchTerm] = useState(''); 

    const handleSubmit = (event) => { 
        event.preventDefault();  
        onSearchSubmit(searchTerm);  
    };

    return (
        <div className="search-bar">  
            <form onSubmit={handleSubmit}>  
                <input
                    type="text"  
                    placeholder="Search Companies, Projects, etc..."  
                    value={searchTerm}  
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="search-input"  
                />
                <button type="submit" className="search-button"><img src={searchicon} alt="" className='searchicon'/></button>  
            </form>
            <div className="lg">
                <img src={mail} alt="" className='mail' />
                <img src={bell} alt="" className='bell'/>
                <h2 className='ls'>Login/SignUp </h2><img src={profile} alt="" className='profile' />
            </div>
           
        </div>
    );
};

export default SearchBar;  // Exporting the SearchBar component to be used in other parts of the app
