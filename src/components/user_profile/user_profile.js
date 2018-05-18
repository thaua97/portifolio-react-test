import React from 'react';
import {Card, Row, Col} from 'react-materialize';
import avatar from '../../images/avatar.png';

const UserProfile = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset="s2 m2"> 
                <img src={avatar} className="circle responsive-img"/>
            </Col>
         </Row>
         <Row className="center-align">
             <h6>Thauã Borges</h6>
             <p className="grey darken-2 white-text">Front-end Developer</p>
         </Row>
    </Card>
);

export default UserProfile;