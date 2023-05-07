import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ShowSummary() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => {
        setShow(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div>
      <h1 className="text-center m-3">Summary</h1>


      {show && (

        <div className='d-flex flex-column justify-content-center align-items-center'>

          <div className="" key={show.id} style={{ width: '20rem' }}>
            {show.image && (
              <img src={show.image.medium} className="card-img-top" alt="Show Image" />
            )}
          </div>

          <p className="card-text text-center m-3">{show.summary.replace(/<\/?[^>]+(>|$)/g, '')}</p>

          <Link to="/" className="btn btn-primary" style={{ width: '8rem' }}>Go Back</Link>
        </div>


      )}

    </div>

  );
}

export default ShowSummary;
