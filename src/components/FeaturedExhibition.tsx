import { FunctionComponent } from 'react';
import { truncateString } from '../utils';

interface FeaturedExhibitionProps {
  title: string;
  curator: string;
  imgUrl: string;
  description: string;
}

const FeaturedExhibition: FunctionComponent<FeaturedExhibitionProps> = ({
  title,
  curator,
  imgUrl,
  description,
}: FeaturedExhibitionProps) => {
  return (
    <div className='flex flex-column justify-center w-100 w-40-ns mh3'>
      <span className='f3 b'>{title}</span>
      <span className='mt2 mb3 ttu f5'>Curated by {curator}</span>
      <img className='mw6 br3' src={imgUrl} alt={title} />
      <p className='tj'>{truncateString(description, 0, 500)}</p>
    </div>
  );
};

export default FeaturedExhibition;
