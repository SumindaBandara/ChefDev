import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#fffdf7] to-[#f7f2e7] min-h-screen flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl w-full">

        {/* Text Content */}
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet <span className="text-orange-500">Chef Devinda Bandaaaa</span> <br />
            A Taste of Royalty on Your Plate
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A passionate culinary artist blending tradition with modern flavors.
            Discover signature dishes, royal recipes, and unforgettable taste.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-orange-500 text-white px-6 py-2 rounded-xl shadow hover:bg-orange-600 transition-all">
              Explore Dishes
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-xl hover:bg-orange-50 transition-all">
              Contact Chef
            </button>
          </motion.div>
        </div>

        {/* Chef Image + Animation */}
        <motion.div
          className="relative w-full h-[400px] flex items-center justify-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Place your chef photo in public/chef.png or import it */}
          <img
            src="./assets/IMG_4515.PNG"
            alt="Chef"
            className="rounded-full w-72 h-72 object-cover z-10 border-4 border-orange-200 shadow-xl"
          />

          {/* Floating Knives Animation */}
          <motion.div
            className="absolute -left-12 top-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaUtensils className="text-orange-400 text-xl" />
          </motion.div>

          <motion.div
            className="absolute right-0 bottom-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <FaUtensils className="text-orange-400 text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;