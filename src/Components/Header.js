import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import TechStack from './TechStack';


export default function Header() {
  return (
    <>
      <a className="navbar" href={Projects}>
        Projects
      </a>
      <a className="navbar" href={Experience}>
        Experience
      </a>
      <a className="navbar" href={TechStack}>
        TechStack
      </a>
    </>
  );
}
