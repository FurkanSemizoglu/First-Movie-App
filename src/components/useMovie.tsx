"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [
      string,
      string,
      string
    ],
    id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average:string,
    vote_count: string
}

export function useMovies(searchMovie: string | null) {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
      /*     const response = await axios.get('https://api.themoviedb.org/3/search/movie/popular?api_key=84b407c4d68abcbbcd5d97262a8f0148', {
          params: {
            api_key: process.env.NEXT_PUBLIC_API_KEY,
            query: searchMovie,
          },
        });  */
 
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=84b407c4d68abcbbcd5d97262a8f0148')
        console.log(response.data)
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchMovies();
    if (searchMovie) {
      fetchMovies();
    }
  }, [searchMovie]);

  return { movies };
}