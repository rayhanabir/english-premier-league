import React from 'react';
import {Card, Button} from 'react-bootstrap';  
import './Club.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';


const Club = (props) => {
    const {strTeamBadge, strTeam, strSport, idTeam} = props.club;
    const history =useHistory();
    const handleTeam = (teamId) =>{
        const url =`/team/${teamId}`
        history.push(url)
    }
    return (
        <div className='col-md-4 col-lg-3 '>
            <Card className ='team-card'>
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>
                Sports type: {strSport}
                </Card.Text>
                <Button onClick ={() =>handleTeam(idTeam)} variant="primary">Explore  <FontAwesomeIcon icon={faArrowRight} /> </Button>
            </Card.Body>
            </Card>

        </div>
    );
};

export default Club;