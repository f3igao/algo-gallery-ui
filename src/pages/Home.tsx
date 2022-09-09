import { Fragment, FunctionComponent } from 'react';
import FeaturedExhibition from '../components/FeaturedExhibition';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <Fragment>
      <p>
        The Portuguese word Nefelibata literally translates as Cloud Walker. To
        be nefelibata means to think and live outside of preconceived boxes, to
        be true to your heart, and to follow your own path
      </p>
      <div className='flex flex-column flex-row-ns justify-around'>
        <FeaturedExhibition></FeaturedExhibition>
        <FeaturedExhibition></FeaturedExhibition>
      </div>
    </Fragment>
  );
};

export default Home;
