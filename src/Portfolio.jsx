import React from "react";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Ranjith Katta | UI/UX Designer</h1>
        <p className="text-gray-600">AL, USA • <a href="mailto:ranjithkatta220@gmail.com" className="text-blue-600 underline">ranjithkatta220@gmail.com</a></p>
        <p><a href="#" className="text-blue-600 underline">LinkedIn Profile</a></p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          UI/UX Designer with 3+ years of experience designing and developing responsive web applications using React.js, Angular, and Tailwind CSS. I specialize in building scalable design systems, improving accessibility and performance, and aligning business goals with intuitive user experiences. Passionate about solving complex problems through research-driven design and seamless collaboration with developers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Case Studies</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">DXC Technology – Enterprise Dashboard Redesign</h3>
          <p className="italic">UI/UX Designer | Jul 2024 – Present</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Redesigned a legacy enterprise dashboard to improve performance, usability, and consistency.</li>
            <li>Created Figma prototypes and centralized components in Storybook.</li>
            <li>Used React.js, Tailwind CSS, GraphQL.</li>
            <li>Impact: 42% faster loads, 28% better task success, Core Web Vitals 62 → 91.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Hexaware Technologies – B2C Portal</h3>
          <p className="italic">UI/UX Designer | Jan 2020 – Jul 2022</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Built Angular web portal and WordPress themes from XD/Sketch.</li>
            <li>Implemented Firebase, ran A/B tests and usability sessions.</li>
            <li>Impact: 47% mobile engagement boost, 22% less drop-off, 98% UI consistency.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Design & Prototyping</h4>
            <p>Figma, Adobe XD, Sketch, Balsamiq, InVision, Storybook</p>
          </div>
          <div>
            <h4 className="font-semibold">Frontend</h4>
            <p>React.js, Angular, Vue.js, TypeScript, Tailwind CSS, SCSS</p>
          </div>
          <div>
            <h4 className="font-semibold">UX Research</h4>
            <p>User Interviews, A/B Testing, Journey Mapping</p>
          </div>
          <div>
            <h4 className="font-semibold">APIs & Tools</h4>
            <p>GraphQL, Axios, Firebase, GitHub, Jira, CI/CD</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="list-disc list-inside">
          <li><strong>MS in Data Science</strong>, University of Alabama, Birmingham (2022–2024)</li>
          <li><strong>B.Tech</strong>, GITAM University, India (2018–2022)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: <a href="mailto:ranjithkatta220@gmail.com" className="text-blue-600 underline">ranjithkatta220@gmail.com</a></p>
        <p>LinkedIn: <a href="#" className="text-blue-600 underline">LinkedIn Profile</a></p>
      </section>

      <footer className="text-center pt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Ranjith Katta. All rights reserved.
      </footer>
    </div>
  );
}
