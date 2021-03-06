import { NavLink, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from "../Button";
import oskar from '../../images/oskar.jpg'
import s from "./FilmDetails.module.css";

const FilmDetails = ({ film, onModalOpen }) => {
    const { url } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const { id, poster_path, title, release_date, production_countries, vote_average, budget, genres, overview, revenue, runtime, tagline } = film;
    const genresFilm = genres.map(genre => genre.name).join(', ');
    const country = production_countries.map(({ name }) => name).join(', ');
    const poster = poster_path === null ? oskar : `${IMAGE_URL}${poster_path}`;
    
    const onGoBack = () => {
        history.push(location?.state?.from ?? '/')
    };

    return (
        <>
            <div className={s.buttonContainer}>
                <Button text={'Go back'} type={'button'} onLoadMore={onGoBack}/>
            </div>
            <div className={s.card}>
                <div className={s.data}>
                    <div className={s.poster} onClick={() => onModalOpen(id)}>
                        <img className={s.image} src={poster} alt={title} />
                    </div>
                    <div className={s.details}>
                        <h1 className={s.title}>{title}({release_date.slice(0, 4)})</h1>
                        <h2 className={s.tagline}>{tagline}</h2>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <span className={s.meaning}>Date:</span>
                                <span className={s.value}>{release_date}</span>
                            </li>
                            <li className={s.item}>
                                <span className={s.meaning}>Genres:</span>
                                <span className={s.value}>{genresFilm}</span>
                            </li>
                            <li className={s.item}>
                                <span className={s.meaning}>Runtime:</span>
                                <span className={s.value}>{runtime}min</span>
                            </li>
                            <li className={s.item}>
                                <span className={s.meaning}>Country:</span>
                                <span className={s.value}>{country}</span>
                            </li>
                            <li className={s.item}>
                                <span className={s.meaning}>Budget:</span>
                                <span className={s.value}>{budget}$</span>
                            </li>
                            <li className={s.item}>
                                <span className={s.meaning}>Revenue:</span>
                                <span className={s.value}>{revenue}$</span>
                            </li>
                            <li className={s.item}>
                                <span className={s.meaning}>Rating IMDB:</span>
                                <span className={s.value}>{vote_average}</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
                <div className={s.overview}>
                    <h3 className={s.overviewTitle}>Overview:</h3>
                    <p className={s.overviewText}>{overview}</p>
                </div>
                
                <ul className={s.info}>

                    <li className={s.infoItem}>
                        <NavLink
                            exact
                            to={{
                                pathname: `${url}/cast`,
                                state: { ...location.state }
                            }}
                            className={s.linkInfo}
                            activeClassName={s.activeLinkInfo}
                        >
                            Actors
                        </NavLink>
                    </li>

                    <li className={s.infoItem}>
                        <NavLink
                            exact
                            to={{
                                pathname: `${url}/reviews`,
                                state: { ...location.state }
                            }}
                            className={s.linkInfo}
                            activeClassName={s.activeLinkInfo}
                        >
                            Reviews
                        </NavLink>
                    </li>

                    <li className={s.infoItem}>
                        <NavLink
                            exact
                            to={{
                                pathname: `${url}/images`,
                                state: { ...location.state }
                            }}
                            className={s.linkInfo}
                            activeClassName={s.activeLinkInfo}
                        >
                            Images
                        </NavLink>
                    </li>

                    <li className={s.infoItem}>
                        <NavLink
                            exact
                            to={{
                                pathname: `${url}/trailers`,
                                state: { ...location.state }
                            }}
                            className={s.linkInfo}
                            activeClassName={s.activeLinkInfo}
                        >
                            Trailers
                        </NavLink>
                    </li>

                    <li className={s.infoItem}>
                        <NavLink
                            exact
                            to={{
                                pathname: `${url}/similar`,
                                state: { ...location.state }
                            }}
                            className={s.linkInfo}
                            activeClassName={s.activeLinkInfo}
                        >
                            Similar
                        </NavLink>
                    </li>

                </ul>
            </div>
        </>
    );
};

FilmDetails.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        production_countries: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
        }),),
        vote_average: PropTypes.number,
        budget: PropTypes.number,
        genres: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
        })),
        overview: PropTypes.string,
        revenue: PropTypes.number,
        runtime: PropTypes.number,
        tagline: PropTypes.string,
    }).isRequired,
    onModalOpen: PropTypes.func.isRequired,
};

export default FilmDetails;