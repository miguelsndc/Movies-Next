import { Card, Overlay, MovieInfo } from './styles'

import Link from 'next/link'
import Image from 'next/image'

interface MovieCardProps {
  title: string
  id: number
  posterPath: string
  rating: number
}

{
  /* <Overlay />

      > */
}

export function MovieCard({ title, posterPath, rating, id }: MovieCardProps) {
  const myLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/w500${src}`
  }

  return (
    <Link href={`/movies/${id}`}>
      <Card>
        <Overlay />
        <Image
          loader={myLoader}
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          width={520}
          height={640}
        />
        <MovieInfo>
          <span>{title}</span>
          <div>
            <img src="/assets/images/imdb.svg" alt="imdb" />
            <span>{rating}</span>
          </div>
        </MovieInfo>
      </Card>
    </Link>
  )
}
