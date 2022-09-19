import { Fragment, FunctionComponent } from 'react';
import FeaturedExhibition from '../components/FeaturedExhibition';
import OngoingExhibition from '../components/OngoingExhibition';
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
      <div className="flex flex-column flex-row-ns justify-around items-center items-start-ns mv4">
        {exhibitions.map((exhibition) => (
          <FeaturedExhibition
            key={exhibition.id}
            id={exhibition.id}
            title={exhibition.title}
            curator={exhibition.curator}
            description={exhibition.description}
          />
        ))}
      </div>
      <div>
        <OngoingExhibition />
      </div>
    </Fragment>
  );
};

export default Home;
