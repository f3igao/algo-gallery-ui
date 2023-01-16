import { FunctionComponent } from 'react';
import {
  FEATURED_EXHIBITIONS_PAYLOAD,
  ONGOING_EXHIBITIONS_PAYLOAD,
} from '../mocks';
import { getLogoUrl } from '../utils';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const featuredExhibitions = FEATURED_EXHIBITIONS_PAYLOAD;
  const ongoingExhibitions = ONGOING_EXHIBITIONS_PAYLOAD;

  return (
    // <Fragment>
    //   <p>
    //     The Portuguese word Nefelibata literally translates as Cloud Walker. To
    //     be nefelibata means to think and live outside of preconceived boxes, to
    //     be true to your heart, and to follow your own path
    //   </p>
    //   <div className='flex flex-column flex-row-ns justify-around items-center items-start-ns mv4'>
    //     {featuredExhibitions.map((exhibition) => (
    //       <FeaturedExhibition
    //         key={exhibition.id}
    //         id={exhibition.id}
    //         title={exhibition.title}
    //         curator={exhibition.curator}
    //         description={exhibition.description}
    //       />
    //     ))}
    //   </div>
    //   <div className='mh7 mv4'>
    //     <OngoingExhibition exhibitions={ongoingExhibitions} />
    //   </div>
    // </Fragment>
    <div className="vh-75 flex flex-column justify-center">
      <p className="w-60">
        The Portuguese word Nefelibata literally translates as Cloud Walker. To
        be nefelibata means to think and live outside of preconceived boxes, to
        be true to your heart, and to follow your own path
      </p>
      <div className="flex items-center f5 mt5">
        <span>POWERED BY</span>
        <a
          className="pointer-fade"
          href="https://algorand.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w4 object-cover"
            src={getLogoUrl('algorand-dark', 'svg')}
            alt="algorand"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
