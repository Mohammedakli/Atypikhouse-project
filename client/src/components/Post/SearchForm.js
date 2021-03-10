import { MDBBtn, MDBCard, MDBInput } from "mdbreact";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utilitaires";
import Card from "./Card";

const SearchForm = () => {
  const posts = useSelector((state) => state.postReducer);
  const [searcharr, setSearcharr] = useState('')
  const [searchdep, setSearchdep] = useState('')

  const refrechSearch = () => {
    setSearcharr('');
    setSearchdep('');
  }

  return (
    <div>

      <div className="row">
        <div className="col-1"></div>
        <MDBInput
          htmlFor="date_arr"
          label="Date d'arriver"
          type="date"
          id="date_arr"
          onChange={e => setSearcharr(e.target.value)}
        />
        <div className="col-1"></div>
        <MDBInput
          htmlFor="date_dep"
          label="Date de depart"
          type="date"
          id="date_dep"
          onChange={e => setSearchdep(e.target.value)}
        />
        <i title="Rafraîchir" style={{padding: '20px'}} onClick={refrechSearch} class="fas fa-sync-alt"></i>
       

      </div>

      <div>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            if (
              (((searcharr < post.date_open) || (post.date_close > searcharr))
              && (searcharr > post.date_open))
              
            ) {
              if (searchdep <= post.date_close) {
                return (
                <div>
                  <p style={{ color: 'red' }}>Disponible</p>
                  <Card post={post} key={post._id} />
                </div>

              )
              }
             
              
            }
             
          } )}
      </div>
    </div>
  );
};

export default SearchForm;
