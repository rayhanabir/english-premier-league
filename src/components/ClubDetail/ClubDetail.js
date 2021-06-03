import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetail.css';
import Male from "../../image/male.png";
import FeMale from "../../image/female.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFlag, faMapMarkerAlt,faFutbol,faVenusMars,} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

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
     const {strStadiumThumb,strFacebook, strInstagram, strTwitter,  strTeamBadge, strSport, strTeam, strGender, intFormedYear, strCountry, strStadiumDescription,  strDescriptionEN, } = team;
    return (
        <div>
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
           
                <p className='mt-4 container'>{strStadiumDescription}</p> 
                <br/>
                <p className='container mt-4'>{strDescriptionEN}</p>
                
 
        </div>
                <div className='icon'>
                  
                   <a className='icon-item' href={`https://${strFacebook}`} target='_blank' rel="noreferrer"><FontAwesomeIcon size='2x' icon={faFacebookF} /></a>
                   <a className='icon-item' href={`https://${strInstagram}`} target='_blank' rel="noreferrer"><FontAwesomeIcon size='2x' icon={faInstagram} /></a>
                   <a className='icon-item' href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon size='2x' icon={faTwitter} /></a>
                   
                </div>
        </div>
    );
};

export default ClubDetail;