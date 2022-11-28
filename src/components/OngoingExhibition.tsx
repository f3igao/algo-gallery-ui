import { FunctionComponent } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import { IExhibit } from '../mocks';
import { SImageContainer } from '../utils';

interface OngoingExhibitionProps {
  exhibitions: IExhibit[];
}

const OngoingExhibition: FunctionComponent<OngoingExhibitionProps> = ({
  exhibitions,
}: OngoingExhibitionProps) => {
  const buildSlides = () => {
    return exhibitions.map((exhibition, i) => (
      <SwiperSlide key={exhibition.title + i}>
        <SImageContainer>
          <img src={exhibition.imgUrl} alt={exhibition.title} />
          <p>{exhibition.description}</p>
        </SImageContainer>
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
