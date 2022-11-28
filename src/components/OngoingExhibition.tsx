import { FunctionComponent } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import { IExhibit } from '../mocks';
import { getImgUrl } from '../utils';

interface OngoingExhibitionProps {
  exhibitions: IExhibit[];
}

const OngoingExhibition: FunctionComponent<OngoingExhibitionProps> = ({
  exhibitions,
}: OngoingExhibitionProps) => {
  const buildSlides = () => {
    return exhibitions.map((exhibition) => (
      <SwiperSlide key={exhibition.id}>
        <div className='flex flex-column items-center tc'>
          <img
            className='w-75 br3 object-cover h5'
            src={getImgUrl('ongoing', exhibition.id)}
            alt={exhibition.title}
          />
          <p className='pb4'>{exhibition.description}</p>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      pagination
      navigation
      modules={[Pagination, Navigation]}
      onSlideChange={(slideChangeParams) => {
        console.log(slideChangeParams);
      }}
    >
      {buildSlides()}
    </Swiper>
  );
};

export default OngoingExhibition;
