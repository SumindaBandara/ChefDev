import React from 'react';

const skills = [
  'Innovative Dish Development',
  'Recipe Standardization',
  'Culinary Presentation',
  'Mise en Place Efficiency',
  'Menu Costing & Profitability',
  'Food Safety & Hygiene',
  'Waste Reduction Techniques',
  'FIFO Food Storage',
  'High-Volume Production',
  'Team & Section Management',
  'Customer Feedback Integration',
  'Special Dietary Needs'
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#1c1b2f] text-[#f4f1eb]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Chef Skills</h2>
        <p className="text-center text-[#b8b2a8] max-w-3xl mx-auto mb-12">
          A decade of hands-on culinary expertise paired with operational excellence. These are the skills that define Chef Deshan’s approach to modern gastronomy and kitchen leadership.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#2b2a3d] border border-[#44435b] text-center text-sm px-4 py-3 rounded-xl font-medium text-[#f4f1eb] shadow-md hover:bg-[#a18c5f] hover:text-black transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
