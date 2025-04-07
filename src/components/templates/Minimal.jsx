// import React from "react";
// // import minimalData from '../pages/MinimalData';

// const Minimal = () => {
//     return (
//         <div className="minimal-container">
//             <h1 className="minimal-name">{minimalData.name}</h1>
//             <h2 className="minimal-title">{minimalData.title}</h2>
//             <p className="minimal-contact">{minimalData.contact}</p>

//             <div className="minimal-skills">
//                 <h2>Skills</h2>
//                 <ul>
//                     {minimalData.skills.map((skill, index) => (
//                         <li key={index}>{skill}</li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="minimal-experience">
//                 <h2>Experience</h2>
//                 {minimalData.experience.map((exp, index) => (
//                     <div key={index} className="minimal-experience-item">
//                         <h3>{exp.position} - {exp.company}</h3>
//                         <p>{exp.date}</p>
//                         <ul>
//                             {exp.description.map((desc, idx) => (
//                                 <li key={idx}>{desc}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Minimal;
// import React from "react";
// import '../css/templateMinimal.css';

// const Minimal = ({ data }) => {
//   return (
//     <div className="minimal-container" style={{ backgroundColor: '#fff', color: '#333', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
//       {/* Header Section */}
//       <div className="minimal-header" style={{ textAlign: 'center' }}>
//       <img src={data.profilePic} alt="Profile" className="noel-image" />
//         <h1 className="minimal-name">{data.personal.fullName}</h1>
//         <h3 className="minimal-title">{data.personal.jobTitle}</h3>
//       </div>
      
//       {/* Contact Section */}
//       <section className="minimal-contact">
//         <h3>Contact</h3>
//         <p>📞 {data.personal.phone}</p>
//         <p>📧 {data.personal.email}</p>
//         <p>📍 {data.personal.address}</p>
//       </section>

//       {/* Education Section */}
//       <section className="minimal-education">
//         <h3>Education</h3>
//         {Array.isArray(data.education) ? (
//           data.education.map((edu, index) => (
//             <div key={index} className="minimal-education-item">
//               <p className="minimal-education-degree">
//                 <strong>{edu.degree}</strong>
//               </p>
//               <p className="minimal-education-university">{edu.university}</p>
//               <p className="minimal-education-year">{edu.year}</p>
//             </div>
//           ))
//         ) : (
//           <div className="minimal-education-item">
//             <p className="minimal-education-degree">
//               <strong>{data.education.degree}</strong>
//             </p>
//             <p className="minimal-education-university">{data.education.university}</p>
//             <p className="minimal-education-year">{data.education.year}</p>
//           </div>
//         )}
//       </section>

//       {/* Skills Section */}
//       <section className="minimal-skills">
//         <h3>Skills</h3>
//         <div className="minimal-skills-container">
//           <div className="minimal-skills-category">
//             <h4>Technical Skills</h4>
//             <ul>
//               {data.skills.technical.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="minimal-skills-category">
//             <h4>Soft Skills</h4>
//             <ul>
//               {data.skills.soft.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* About Me Section */}
//       <section className="minimal-about">
//         <h3>About Me</h3>
//         <p>{data.personal.aboutMe}</p>
//       </section>

//       {/* Experience Section */}
//       <section className="minimal-experience">
//         <h3>Experience</h3>
//         <div className="minimal-experience-item">
//           <p className="minimal-experience-company">
//             <strong>{data.experience.companyName}</strong> - <span>{data.experience.companyExp}</span>
//           </p>
//           <p className="minimal-experience-description">
//             {data.experience.jobDescription}
//           </p>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="minimal-projects">
//         <h3>Projects</h3>
//         <div className="minimal-project-item">
//           <p className="minimal-project-title"><strong>{data.experience.projectTitle}</strong></p>
//           <p className="minimal-project-description">{data.experience.projectDescription}</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Minimal;

import React from "react";
import '../css/templateMinimal.css';

const Minimal = ({ data }) => {
  return (
    <div className="minimal-container">
      {/* Header Section */}
      <div className="minimal-header">
        <h1 className="minimal-name">{data.personal.fullName}</h1>
        <h3 className="minimal-title">{data.personal.jobTitle}</h3>
      </div>
      
      {/* Contact Section */}
      <section className="minimal-contact">
        <h3>Contact</h3>
        <p>📞 {data.personal.phone}</p>
        <p>📧 {data.personal.email}</p>
        <p>📍 {data.personal.address}</p>
      </section>

      {/* Education Section */}
      <section className="minimal-education">
        <h3>Education</h3>
        {Array.isArray(data.education) ? (
          data.education.map((edu, index) => (
            <div key={index} className="minimal-education-item">
              <p className="minimal-education-degree">
                <strong>{edu.degree}</strong>
              </p>
              <p className="minimal-education-university">{edu.university}</p>
              <p className="minimal-education-year">{edu.year}</p>
            </div>
          ))
        ) : (
          <div className="minimal-education-item">
            <p className="minimal-education-degree">
              <strong>{data.education.degree}</strong>
            </p>
            <p className="minimal-education-university">{data.education.university}</p>
            <p className="minimal-education-year">{data.education.year}</p>
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section className="minimal-skills">
        <h3>Skills</h3>
        <div className="minimal-skills-container">
          <div className="minimal-skills-category">
            <h4>Technical Skills</h4>
            <ul>
              {data.skills.technical.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="minimal-skills-category">
            <h4>Soft Skills</h4>
            <ul>
              {data.skills.soft.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="minimal-about">
        <h3>About Me</h3>
        <p>{data.personal.aboutMe}</p>
      </section>

      {/* Experience Section */}
      <section className="minimal-experience">
        <h3>Experience</h3>
        <div className="minimal-experience-item">
          <p className="minimal-experience-company">
            <strong>{data.experience.companyName}</strong> - <span>{data.experience.companyExp}</span>
          </p>
          <p className="minimal-experience-description">
            {data.experience.jobDescription}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="minimal-projects">
        <h3>Projects</h3>
        <div className="minimal-project-item">
          <p className="minimal-project-title"><strong>{data.experience.projectTitle}</strong></p>
          <p className="minimal-project-description">{data.experience.projectDescription}</p>
        </div>
      </section>
    </div>
  );
};

export default Minimal;