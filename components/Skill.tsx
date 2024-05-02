import React from 'react'
import Image from 'next/image';
const Skill = () => {
  const base: string = "https://drive.google.com/uc?export=view&id=";
  const languages = [
    { name: 'Python', icon: `${base}1rvZ0LS5LBeK8BfijW-pkFMkddH0osvMu` },
    { name: 'C++', icon: `${base}1shHFD451hhre95nftht8YDXxkXffdYe8` },
    { name: 'C#', icon: `${base}1wTU3l2Ti9VYUva-kK9_lMJ4tcY7stgPl` },
    { name: 'Java', icon: `${base}1yp44avbIeuH3ENJ6dby36z_3NqhMbkPf` },
    { name: 'JavaScript', icon: `${base}1v3AhqUM_bxqGv7uvQpCL8F8soE9su7Yk` },
    { name: 'TypeScript', icon: `${base}1P8wt3C_pwOQDC1j-0XCzEX-MGwHn6_js` },
    { name: 'Android', icon: `${base}1hrvf166JTW4DuquxE-qhRbIZHsVHFLwC` },
    { name: 'React', icon: `${base}1jdh1Q5SOMFop9NFHZ-0wuuk29zrFFcgI` },
    { name: 'Mendix', icon: `${base}11JFi20sazixYP2OZpo6OTyX6iSr8MJsm` },
    { name: 'ASP.NET', icon: `${base}1xboX3z-cvj6rvgfGeLJBw-G9rONAo0gp` },
    { name: 'MySQL', icon: `${base}1QeUqPVnrFrJbBxBkmu3XviR_mcRM4Mzl` },
    { name: 'mongoDB', icon: `${base}11E_Fv8Jg-9J2d082-BjmNrPwxCKi-8z6` },
    { name: 'Oracle SQL', icon: `${base}1lqOTxWdxhhKc2d9xrkfneSYHACaxF2Wi` },
    { name: 'Rest API', icon: `${base}15f09sF66AAXcE8j6oNUHBAm1HyoyoGxl` },
    { name: 'GitHub', icon: `${base}1ukKp8a4yJIs2qngmARoSHd7l6BhpLCsj` },
  ];

  return (
    <div className='container' id="skill">
      <h2 className="text-4xl font-bold text-white mb-4 pb-10">Skills</h2>
      <div className="grid grid-cols-3 gap-10 sm:grid-cols-2 md:grid-cols-5">
        {languages.map(lang => (
          <div key={lang.name} className="flex flex-col items-center ">
            <Image src={lang.icon} alt={`${lang.name} icon`} width={200} height={200} />
            <span className="mt-2 text-2xl text-center text-white">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill
