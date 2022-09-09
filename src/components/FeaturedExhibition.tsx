import { Fragment, FunctionComponent } from 'react';

interface FeaturedExhibitionProps {}

const FeaturedExhibition: FunctionComponent<FeaturedExhibitionProps> = () => {
  return (
    <div className='flex flex-column justify-center w-100 w-40-ns'>
      <span className='f3 b'>Featured Exhibition One</span>
      <span className='mt2 mb3 ttu f5'>Curated by Jesse Damiani</span>
      <img className='mw6 br3'
        src='https://images.unsplash.com/photo-1616922446637-01425d719b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt=''
      />
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
    </div>
  );
};

export default FeaturedExhibition;
