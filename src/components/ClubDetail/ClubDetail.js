import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetail.css';
import Male from "../../image/male.png";
import FeMale from "../../image/female.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFlag, faMapMarkerAlt,faFutbol,faVenusMars } from '@fortawesome/free-solid-svg-icons'

const ClubDetail = () => {
     const {teamId} = useParams();
     const [team, setTeam] = useState({});
     useEffect(()=>{
         const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
         fetch(url)
         .then(res =>res.json())
         .then(data =>setTeam(data.teams[0]))
     },[teamId]);
    console.log(team)
     const {strStadiumThumb, strTeamBadge, strSport, strTeam, strGender, intFormedYear, strCountry, strDescriptionDE, strDescriptionEN, strFacebook, strInstagram, strYoutube} = team;
    return (
        <div className='bg-light'>
           
            <div className='club-stadium'>
                <img src={strStadiumThumb} alt="stadium"/>
                <div className='club-logo'>
                    <img src={strTeamBadge} alt="stadium"/>
                </div>
            
            </div>

            <div className="container main d-flex justify-content-between align-items-center">
               
                    <div>
                        <h2>{strTeam}</h2>
                        <h5> <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded:  {intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag} /> Country:  {strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol} /> Sports Type:  {strSport}</h5>
                        <p><FontAwesomeIcon icon={faVenusMars} /><small> Gender: {strGender}</small></p>
                    </div>
                
                <div className='player'>
                   {
                       strGender === 'Male' ?  <img className='img-fluid' src={Male} alt=""/> : <img src ={FeMale} alt =""/>
                   }
                </div>
            </div>
           
                <p className='mt-4 container'>{strDescriptionDE}</p> 
                <br/>
                <p className='container'>{strDescriptionEN}</p>
               
        </div>
    );
};

export default ClubDetail;