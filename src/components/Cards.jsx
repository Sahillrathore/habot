import {STEPS} from '../utils/constant'
import { motion } from "framer-motion"

const Cards = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
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
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeInOut' }}
                viewport={{ once: false, amount: 0.2 }}
                className={`p-6 flex flex-col items-center text-center transition-transform duration-300 hover:transform hover:scale-110 ${index % 2 === 0 ? 'bg-[#e8fbff]' : ''
                  }`}
              >
                <div className="p-4 mb-4">
                  <img src={step.src} alt={step.title} />
                </div>
                <h3 className="text-xl font-normal mb-2 text-gray-900">
                  {step.title}
                </h3>
               
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Cards;