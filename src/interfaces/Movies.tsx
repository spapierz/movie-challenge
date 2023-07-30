export interface Movie {
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    id: string;
}

export interface MovieContextData {
    movies: Movie[];
    favorites: Movie[];
    searchMovies: (query: string) => Promise<void>;
    addToFavorites: (movie: Movie) => void;
    removeFromFavorites: (id: string) => void;
}