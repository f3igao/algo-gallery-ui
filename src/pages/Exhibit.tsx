import { Fragment, FunctionComponent } from 'react';
import FeaturedExhibition from '../components/FeaturedExhibition';
import OngoingExhibition from '../components/OngoingExhibition';
import {
  FEATURED_EXHIBITIONS_PAYLOAD,
  ONGOING_EXHIBITIONS_PAYLOAD,
} from '../mocks';

interface ExhibitProps {}

const Exhibit: FunctionComponent<ExhibitProps> = () => {
  const featuredExhibitions = FEATURED_EXHIBITIONS_PAYLOAD;
  const ongoingExhibitions = ONGOING_EXHIBITIONS_PAYLOAD;

  return (
    <Fragment>
      <div className="flex flex-column flex-row-ns justify-around items-center items-start-ns mv4">
        {featuredExhibitions.map((exhibition) => (
          <FeaturedExhibition
            key={exhibition.id}
            id={exhibition.id}
            title={exhibition.title}
            curator={exhibition.curator}
            description={exhibition.description}
          />
        ))}
      </div>
      <div className="mh7 mv4">
        <OngoingExhibition exhibitions={ongoingExhibitions} />
      </div>
    </Fragment>
  );
};

export default Exhibit;
