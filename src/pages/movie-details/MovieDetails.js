import React, {useEffect, useState} from "react";
import {useRouteMatch, useParams} from 'react-router-dom'
import {moviesService} from "../../services";


export const MovieDetails = () => {
    //const {params: {id}} = useRouteMatch()
    const [filmDetails, setFilmDetails] = useState(null);
    const {id} = useParams();
    console.log(id);

    const getMovieDetails = async () => {
        const data = await moviesService.getMovieDataById(id)
        setFilmDetails(data)
    }
    useEffect(() =>{
        getMovieDetails()

    },[])
    return(
        <div>
            <h1>{filmDetails.original_title}</h1>
            <h2>{filmDetails.genres.map(el => <span key={el.id}>{el.name}</span>)}</h2>
            {/*<h3>{filmDetails.}</h3>*/}
            <p>{filmDetails.overview}</p>
        </div>
    )
}