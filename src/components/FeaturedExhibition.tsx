import { FunctionComponent } from 'react';
import { getImgUrl, truncateString } from '../utils';

interface FeaturedExhibitionProps {
  id: string;
  title: string;
  curator: string;
  description: string;
}

const FeaturedExhibition: FunctionComponent<FeaturedExhibitionProps> = ({
  id,
  title,
  curator,
  description,
}: FeaturedExhibitionProps) => {
  return (
    <div className='flex flex-column justify-center w-100 w-40-ns mh3'>
      <span className='f3 b'>{title}</span>
      <span className='mt2 mb3 ttu f5'>Curated by {curator}</span>
      <img className='br3' src={getImgUrl('featured', id)} alt={id} />
      <p className='tj'>{truncateString(description, 0, 240)}</p>
    </div>
  );
};

export default FeaturedExhibition;
