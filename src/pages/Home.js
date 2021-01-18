import React, {useEffect, useState} from "react";
import {FilmList} from "../components/film-list";
import {moviesService} from "../services";
import styles from './Home.module.css'

export const Home = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);


    const fetchMovies = async () => {
        try{
            setIsLoading(true)
            const {results, page, total_page, total_results} = await moviesService.getMovies();
            console.log(results);

            setMoviesList(results);
        }catch (e) {
            console.error(e);

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const renderLoadingIndicator = () => {
        return (
            <div className={styles.loading}>
                Loading...
            </div>
        )
    }

    return(
        <div>
            {isLoading || isLoading === null ? renderLoadingIndicator(): <FilmList items={moviesList}/>}
        </div>

    )
}