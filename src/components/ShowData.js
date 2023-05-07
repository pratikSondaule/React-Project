import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "https://api.tvmaze.com/search/shows?q=all"
const ShowData = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios
            .get(API)
            .then((res) => {
                setShows(res.data);
                console.log(res.data);
            }).catch((err) => {
                console.error(err);
            })
    }, []);

    return (
        <div>
            <h1 className="text-center m-3">List of TV Shows</h1>
            <div className="d-flex justify-content-center flex-wrap">

                {shows.map((item) => {

                    return (
                        <div className="card m-2" key={item.show.id} style={{ width: "20rem" }}>
                            {item.show.image && (
                                <img
                                    src={item.show.image.medium}
                                    className="card-img-top"
                                    alt="Show Image"
                                />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{item.show.name}</h5>
                                <p className="card-text">Type : {item.show.type}</p>
                                <p className="card-text">Genres : {item.show.genres.join(", ")}</p>
                                <p className="card-text">Status : {item.show.status}</p>
                                <p className="card-text">Premiered : {item.show?.premiered || "N/A"}</p>
                                <p className="card-text">Rating : {item.show.rating?.average || "N/A"}</p>



                                <Link
                                    to={{
                                        pathname: `/summary/${item.show.id}`,
                                    }}
                                    className="btn btn-primary"
                                >
                                    Show Summary
                                </Link>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowData;