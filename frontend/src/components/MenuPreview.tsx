import cocktail from '../assets/cocktail.png'
import drinks from '../assets/drinks.png'
import menuBanner from '../assets/menuBanner.png'
import menuRightBanner from '../assets/menuRightbanner.png'
import sideBanner from '../assets/sideBanner.png'

const MenuPreview = () => {
  return (
    <div className="p-1 flex  bg-cover bg-center sm:h-[550px] w-full" style={{ backgroundImage: `url(${menuBanner})` }} >
      <div className="w-full h-full flex items-center justify-between">
        {/* Left Banner */}
        <img
          className="w-25 h-[85%] hidden sm:block"
          src={sideBanner}
          alt="Side Banner"
        />

        {/* Main Content */}
        <div className="relative min-w-[80%] m-2 min-h-[300px] border border-white flex items-center justify-center">
          {/* Floating Images */}
          <img
            className="absolute w-[80px] h-[110px] top-[-20px] left-[0] sm:top-[-75px] sm:left-[-33px] sm:w-[110px] sm:h-[150px]"
            src={drinks}
            alt="Drinks"
          />
          <img
            className="absolute bottom-0 right-0 md:bottom-[-20px] md:right-[-8px]  h-[100px] md:h-[150px]"
            src={cocktail}
            alt="Drinks"
          />

          {/* Content Box */}
          <div className="h-full w-full flex flex-col items-center justify-center">
            {/* Title Section */}
            <div className="flex max-w-[200px] sm:max-w-[100%] gap-2 sm:gap-5 mx-7 justify-center items-center">
              <div className="h-[2px] w-[40px] md:w-[80px] bg-gray-400"></div>
              <h1 className="text-[30px] sm:text-[50px] text-center font-bold text-white">
                BRUNCH COCKTAILS
              </h1>
              <div className="h-[2px] w-[40px] md:w-[80px] bg-gray-400"></div>
            </div>

            {/* Grid Section */}
            <div className="grid mb-[50px]  gap-4 place-items-center   px-5 pt-8 pb-5 grid-cols-12 sm:gap-[60px]">
                  <div className="flex flex-col gap-2 col-span-12 sm:col-span-6">
                    <h1 className="text-white text-lg sm:text-2xl font-semibold">
                      CINNAMON TOAST CRUNCH ............. $16
                    </h1>
                    <p className="max-w-[350px] text-sm sm:text-lg text-justify text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis nesciunt veniam repudiandae placeat libero quas.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 col-span-12 sm:col-span-6">
                    <h1 className="text-white text-lg sm:text-2xl font-semibold">
                      CINNAMON TOAST CRUNCH ............. $16
                    </h1>
                    <p className="max-w-[350px] text-sm sm:text-lg text-justify text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis nesciunt veniam repudiandae placeat libero quas.
                    </p>
                  </div>
                  <div>
                    
                  </div>
                 
            </div>
          </div>
        </div>

        {/* Right Banner */}
        <img
          className="w-25 h-[85%] hidden sm:block"
          src={menuRightBanner}
          alt="Right Banner"
        />
      </div>
    </div>
  );
};

export default MenuPreview;