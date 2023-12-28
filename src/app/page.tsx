"use client"
import { useMovies } from "@/components/useMovie"
import { useSearchParams } from 'next/navigation';
import MovieCard from '@/components/MovieCard';

export default function Home() {
  const searchParams = useSearchParams();
  const searchMovie = searchParams.get('movie');
  const { movies } = useMovies(searchMovie);

  return (
    <main className="h-[550px]">
     <div className="w-4/5 mx-auto flex gap-10 flex-wrap  items-center justify-center">
      
      {movies.map((movie) => (
        <MovieCard key={movie?.id}  movie={movie}/>         

      ))}
    </div>
    </main>
 
  );
     
}