import React from 'react'
import { HiBuildingOffice } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import JobOverviewCard from '../../Components/user/JobOverviewCard';
function JobDescription() {
  return (
    <>
    <div className="max-w-6xl mx-auto mt-10 px-5 grid lg:grid-cols-3 gap-8">
  {/*job section */}
  <div className="lg:col-span-2 space-y-4">
    <h1 className="text-3xl font-bold text-gray-800">Frontend Developer</h1>
    
    <div className="flex items-center text-gray-600 space-x-4">
      <p className="flex items-center gap-1"><HiBuildingOffice className="text-blue-600" /> TechCorp</p>
      <p className="flex items-center gap-1"><IoLocationOutline className="text-blue-600" /> Infopark Phase-1 (Remote/Hybrid)</p>
      <p className="flex items-center gap-1"><CiCreditCard1 className="text-blue-600" /> Full-time</p>
    </div>

    {/* about role*/}
    <div className="mt-6 text-gray-700 space-y-4">
      <h2 className="text-xl font-semibold">About the Role</h2>
      <p>
        We are looking for a passionate Frontend Developer to join our team. You will be responsible for creating responsive, visually appealing, and high-performance web applications using modern frontend technologies. You’ll collaborate closely with designers, backend developers, and product managers to deliver an exceptional user experience.
      </p>

      <h2 className="text-xl font-semibold">Responsibilities</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Develop user-friendly and responsive web applications using React and Tailwind CSS.</li>
        <li>Collaborate with backend developers to integrate APIs.</li>
        <li>Optimize applications for speed, performance, and scalability.</li>
        <li>Participate in code reviews and maintain code quality standards.</li>
        <li>Troubleshoot, debug, and resolve issues across multiple browsers and devices.</li>
      </ul>

      <h2 className="text-xl font-semibold">Requirements / Qualifications</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Bachelor’s degree in Computer Science, Information Technology, or related field.</li>
        <li>Strong knowledge of HTML, CSS, JavaScript, and React.js.</li>
        <li>Experience with responsive design and cross-browser compatibility.</li>
        <li>Familiarity with version control systems, especially Git.</li>
        <li>Good problem-solving skills and attention to detail.</li>
        <li>Ability to work collaboratively in a team environment.</li>
      </ul>

      <h2 className="text-xl font-semibold">Preferred Skills</h2>
      <ul className='list-disc list-inside space-y-1'>
        <li>Experience with TypeScript or Next.js.</li>
        <li>Familiarity with RESTful APIs and asynchronous programming.</li>
        <li>Knowledge of UI/UX principles and accessibility standards.</li>
        <li>Experience with testing frameworks like Jest or React Testing Library.</li>
        <li>Understanding of state management (Redux, Context API, etc.).</li>
      </ul>

      <h2 className="text-xl font-semibold">Company Information</h2>
      <p>
       TechCorp – A leading technology company specializing in web and mobile applications. We are committed to building innovative products, fostering a collaborative culture, and providing growth opportunities for our employees.

      </p>
      <p>Location: Infopark Phase-1 (Remote/Hybrid)
</p>
<p>Employment Type: Full-time</p>
    </div>
  </div>

  {/*  Job Overview Card */}
  <div className="lg:col-span-1">
    <JobOverviewCard />
  </div>
</div>
    </>
  )
}

export default JobDescription