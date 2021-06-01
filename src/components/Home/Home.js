import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const [clubs, setClubs]  = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
        .then(res => res.json())
        .then(data =>setClubs(data.teams))
        
    },[]);
    // console.log(clubs)
    
    
    return (
        <div>

        <div className='bg-secondary'>
            <Header></Header>
          <div className="container">
          <div className="row">
                {
                    clubs.map(club => <Club club = {club} key ={club.idTeam}></Club>)
                }
          </div>
          </div>
        
        </div>
       <p className='text-center mt-5'>2021-2022  <FontAwesomeIcon icon={faCopyright} /> <a className='text-decoration-none fw-bold ' href="https://www.facebook.com/rayhan915">Rayhan Abir</a> All Rights Reserved</p>
        </div>
          
    );
};

export default Home;