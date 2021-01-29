import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import {pickGistLanguages} from '../utils/languageUtils';
import {getLatestForkers} from '../services/gist_service';


const GistCard = ({gist}) => {
    const [forkers, setForkers] = useState([]);

    useEffect(() => {
        const latestForkers = getLatestForkers(gist.id);
        setForkers(latestForkers);
    }, [])

    return (
      <>
        <Card border="primary" style={{ width: "100%" }}>
          <Card.Header>Gist</Card.Header>
          <Card.Body>
            <Card.Title>
              {gist.owner.login}
              <img
                className="avatar"
                src={gist.owner.avatar_url}
                alt={gist.owner.login}
                title={gist.owner.login}
              />
            </Card.Title>
            <Card.Text>Description: {gist.description}</Card.Text>
            <b>Languages: </b>
            {pickGistLanguages(gist.files).map((item, idx) => (
              <>
                <Badge variant="primary" key={idx}>
                  {item}
                </Badge>{" "}
              </>
            ))}
            <p className="forkers"><b>Last Forked By:</b>
            {
                forkers.length > 0 ? (forkers.map((item, idx) => (
                    <img
                className="avatar"
                src={item.owner.avatar_url}
                alt={item.owner.login}
                title={item.owner.login}
              />
                ))
                ) : ` No forkers found`
            }
            </p>
          </Card.Body>
        </Card>
      </>
    );
}

export default GistCard;