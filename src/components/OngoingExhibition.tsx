import { FunctionComponent, useState } from 'react';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
// import 'swiper/modules/scrollbar/scrollbar.min.css';

const ONGOING_EXHIBITIONS_PAYLOAD = [
  {
    id: 'coffee-exhibition-a',
    title: 'Coffee  Exhibition A',
    curator: 'Jamie xx',
    description:
      'Pumpkin spice coffee white shop, redeye macchiato variety spoon to go body sweet dark robusta aroma viennese id in irish cream. Beans sit at eu as steamed, aged, fair trade sit et medium cultivar, robust, java, sugar froth rich coffee con panna eu froth. At roast bar , est cappuccino latte, pumpkin spice, breve and beans, sit whipped mocha plunger pot to go barista. A, flavour pumpkin spice filter, eu espresso java, grounds blue mountain foam steamed caffeine con panna frappuccino, latte café au lait in extraction strong irish americano brewed. Doppio, redeye half and half at, rich instant macchiato, et single shot, and qui cultivar, café au lait, aftertaste aromatic doppio irish aroma cream. Galão, foam ristretto doppio, steamed aged, whipped macchiato, and, white siphon est arabica chicory robust turkish body flavour at acerbic percolator sit cup ristretto.',
  },
  {
    id: 'coffee-exhibition-b',
    title: 'Coffee  Exhibition B',
    curator: 'Florence and the Machine',
    description:
      'Cream medium, latte spoon irish brewed aromatic, est ristretto at chicory milk. Dark in coffee strong wings cream strong. Java cup, percolator steamed and filter cream plunger pot.',
  },
  {
    id: 'coffee-exhibition-c',
    title: 'Coffee  Exhibition C',
    curator: 'Beacon',
    description:
      'Est siphon, arabica, café au lait, fair trade cultivar seasonal, siphon roast black, latte mocha so flavour carajillo. Qui, to go, redeye eu doppio, robust half and half aroma extraction, skinny shop roast arabica ristretto cream. Redeye, dripper est wings galão extra  cortado blue mountain to go mug to go cultivar qui, mazagran viennese, breve ut fair trade sweet organic. Wings doppio, iced irish a in medium, blue mountain cortado, mug eu extra  to go cappuccino wings a milk affogato cinnamon, shop extra  acerbic ut acerbic. Coffee roast pumpkin spice mug chicory iced con panna, wings, crema, dripper froth café au lait kopi-luwak fair trade pumpkin spice.',
  },
  {
    id: 'coffee-exhibition-d',
    title: 'Coffee  Exhibition D',
    curator: 'Hotline Miami',
    description:
      'Cultivar saucer, decaffeinated, half and half grinder flavour cortado instant id bar  whipped. Grinder, breve irish cultivar acerbic carajillo milk et single shot. Half and half steamed, barista seasonal cappuccino siphon iced aftertaste. White, dripper, aftertaste shop flavour qui single origin.',
  },
  {
    id: 'coffee-exhibition-e',
    title: 'Coffee  Exhibition E',
    curator: 'Mac Miller',
    description:
      'Shop, frappuccino, redeye espresso blue mountain brewed pumpkin spice cream. Ut skinny, carajillo mug aroma seasonal spoon. Foam qui organic sugar, ristretto kopi-luwak espresso medium milk. Iced ut, instant barista eu plunger pot sit siphon. And, extra  grounds arabica cup extraction grounds.',
  },
];

interface OngoingExhibitionProps {
  // exhibitions: any[];
}

const OngoingExhibition: FunctionComponent<
  OngoingExhibitionProps
> = ({}: // exhibitions,
OngoingExhibitionProps) => {
  const [activeExhibition, setActiveExhibition] = useState<any>({});
  const exhibitions = ONGOING_EXHIBITIONS_PAYLOAD;

  // const swiper = new Swiper('.swiper', {
  //   // configure Swiper to use modules
  //   modules: [Navigation, Pagination],
  //   ...
  // });

  const buildExhibitionSlides = (): any[] => {
    // const exhibitionImgs = exhibitions.map((bc) => {
    //   const vehicleBodyClass = bc || BodyClass.Undetermined;
    //   return {
    //     url: `/static/exhibitions/ongoing/${BodyClassImgMapping[vehicleBodyClass]}.png`,
    //     caption: vehicleBodyClass,
    //   };
    // });

    // return exhibitionImgs.map((exhibitionImg) => (
    //   <SwiperSlide key={exhibitionImg.url}>
    //     <div>
    //       <img src={exhibitionImg.url} alt={exhibitionImg.caption} />
    //       <p>{exhibitionImg.caption}</p>
    //     </div>
    //   </SwiperSlide>
    // ));
    return [];
  };

  return (
    <Swiper
      // slidesPerView={1}
      // spaceBetween={30}
      navigation
      pagination={{ clickable: true }}
      loop
      modules={[Pagination, Navigation]}
      onSlideChange={({ activeIndex }) =>
        setActiveExhibition(exhibitions[activeIndex])
      }
    >
      <SwiperSlide key={1}>
        <div className="h3 w3 bg-red">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide key={2}>
        <div className="h3 w3 bg-red">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide key={3}>
        <div className="h3 w3 bg-red">Slide 3</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OngoingExhibition;
