import React, {useState, useEffect} from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import SearchBar from './components/SearchbarComponent';
import GistCard from './components/GistCardComponent';

import {getAllGists} from './services/gist_service';

function App() {
  const [user, setUser] = useState("");
  const [userGists, setUserGists] = useState([]);
  const [loading, setLoading] = useState(false);

   const handleSearchInputChanges = (e) => {
     setUser(e.target.value);
   };

   const resetInputField = () => {
     setUser("");
   };

   const callSearchFunction = (e) => {
     e.preventDefault();
     search(user);
     resetInputField();
   };

   const search = async (user) => {
     console.log(user);
     setLoading(true);
     const gists = await getAllGists(user);
     setLoading(false);
     setUserGists(gists);
   }

   const renderCards = (loading, gists) => {
     return loading ? (
       <Row>
         <Spinner animation="grow" variant="info" />
       </Row>
     ) : (
       gists ? userGists.map((item, idx) => (
         <Row>
           <GistCard gist={item} key={idx} />
         </Row>
       )) : 
       !loading && gists === undefined && <Row>No Gists were found for the user!</Row>
     );
   };

  return (
    <div className="App">
      <header className="">
        <h1>Github Gists</h1>
      </header>
      <Container>
        <Row>
          <SearchBar
            handleChange={handleSearchInputChanges}
            handleSearch={callSearchFunction}
            value={user}
          />
        </Row>
        {renderCards(loading, userGists)}
      </Container>
    </div>
  );
}

export default App;
