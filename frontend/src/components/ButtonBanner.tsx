import MenuBtn from './MenuBtn';
import Banner2 from '../assets/banner2.png'


const ButtonBanner = () => {

  return (
      <div style={{ backgroundImage: `url(${Banner2})` }} className={`bg-cover bg-center`}>     
          <div className='container max-w-[1200px] min-h-10 mx-auto text-white flex justify-between items-baseline p-6 px-2'>
              <div className='flex justify-center gap-4 w-full'>
                  <MenuBtn isActive={false} content={'FOOD'} />
                  <MenuBtn isActive={true} content={'DRINKS'} />
                  <MenuBtn isActive={false} content={'BRUNCH'} />
               </div>
           </div>
      </div>
  )
}

export default ButtonBanner
