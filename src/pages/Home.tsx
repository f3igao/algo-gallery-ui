import { Fragment, FunctionComponent } from 'react';
import FeaturedExhibition from '../components/FeaturedExhibition';
import { FEATURED_EXHIBITIONS_PAYLOAD } from '../mocks';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const exhibitions = FEATURED_EXHIBITIONS_PAYLOAD;
  return (
    <Fragment>
      <p>
        The Portuguese word Nefelibata literally translates as Cloud Walker. To
        be nefelibata means to think and live outside of preconceived boxes, to
        be true to your heart, and to follow your own path
      </p>
      <div className='flex flex-column flex-row-ns justify-around mv4'>
        {exhibitions.map((exhibition) => (
          <FeaturedExhibition
            title={exhibition.title}
            curator={exhibition.curator}
            imgUrl={exhibition.imgUrl}
            description={exhibition.description}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
