import {STEPS} from '../utils/constant'
const Cards = () => {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How it works?</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with 
              potential buyers, and build successful business relationships, sharing valuable feedback.
            </p>
          </div>
  
          {/* Grid of steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <div 
                key={index}
                className={`p-6 flex flex-col items-center text-center transition-transform duration-300 hover:transform hover:scale-105 ${
                    index % 2 === 0 ? 'bg-[#e8fbff]' : '' 
                  }`}
              >
                <div className=" p-4 mb-4 ">
                 <img src={step.src}/>
                </div>
                <h3 className="text-xl font-normal mb-2 text-gray-900">
                  {step.title}
                </h3>
                {/* <p className="text-gray-600">
                  {step.description}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Cards;