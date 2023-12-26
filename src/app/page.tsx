"use client"
import { useMovies } from "@/components/useMovie"
import { useSearchParams } from 'next/navigation';
import MovieCard from '@/components/MovieCard';

export default function Home() {
  const searchParams = useSearchParams();
  const searchMovie = searchParams.get('movie');
  const { movies } = useMovies(searchMovie);

  return (
    <main className="w-4/5 mx-auto flex gap-3">
      {movies.map((movie) => (
        <MovieCard key={movie?.id} movie = {movie}/>    
       

      ))}
    </main>
  );
     
}