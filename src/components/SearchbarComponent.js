import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import "./searchbar.css";

const SearchBar = ({handleSearch, handleChange, value}) => {
    return (
      <div className="searchbar">
        <form>
          <InputGroup className="mb-12">
            <FormControl
              placeholder="Search a github user for gists"
              aria-label="Search a github user for gists"
              aria-describedby="basic-addon2"
              onChange={handleChange}
              value={value}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={handleSearch}
                variant="primary"
              >
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
      </div>
    );
};

export default SearchBar;