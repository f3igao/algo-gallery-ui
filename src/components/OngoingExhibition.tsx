// import { FunctionComponent } from 'react';
// import { truncateString } from '../utils';
// import { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// import 'swiper/modules/navigation/navigation.min.css';
// import 'swiper/modules/pagination/pagination.min.css';

// interface OngoingExhibitionProps {
//   title: string;
//   curator: string;
//   imgUrl: string;
//   description: string;
// }

// const OngoingExhibition: FunctionComponent<OngoingExhibitionProps> = ({
//   title,
//   curator,
//   imgUrl,
//   description,
// }: OngoingExhibitionProps) => {
//   const [bodyClass, setBodyClass] = useState<BodyClass | undefined>(
//     fleetBodyClasses[0]
//   );
//   const [vehicleCharPivot, setVehicleCharPivot] = useState<VehicleChar>(
//     VehicleChar.ModelYear
//   );

//   const buildBodyClassSlides = () => {
//     const bodyClassImgs = fleetBodyClasses.map((bc) => {
//       const vehicleBodyClass = bc || BodyClass.Undetermined;
//       return {
//         url: `/static/vehicles/bodyClasses/${BodyClassImgMapping[vehicleBodyClass]}.png`,
//         caption: vehicleBodyClass,
//       };
//     });

//     return bodyClassImgs.map((bodyClassImage) => (
//       <SwiperSlide key={bodyClassImage.url}>
//         <SwiperImgContainer>
//           <img src={bodyClassImage.url} alt={bodyClassImage.caption} />
//           <p>{bodyClassImage.caption}</p>
//         </SwiperImgContainer>
//       </SwiperSlide>
//     ));
//   };

//   return (
//     <Swiper
//       pagination
//       navigation
//       modules={[Pagination, Navigation]}
//       onSlideChange={({ activeIndex }) =>
//         setBodyClass(fleetBodyClasses[activeIndex])
//       }
//     >
//       {buildBodyClassSlides()}
//     </Swiper>
//   );
// };

// export default OngoingExhibition;
