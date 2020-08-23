import React, { Component } from 'react';
import Header from '../components/header/Header';
import Greeting from './greeting/Greeting';
import Skills from './skills/Skills';
import StackProgress from './skillProgress/skillProgress';
import WorkExperience from './workExperience/WorkExperience';
import Blogs from './blogs/Blogs';
import Footer from '../components/footer/Footer';
import Top from './topbutton/Top';

import Contact from './contact/Contact';
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <WorkExperience />
        <Blogs />
        <Contact />
        <Footer />
        <Top />
      </div>
    );
  }
}
