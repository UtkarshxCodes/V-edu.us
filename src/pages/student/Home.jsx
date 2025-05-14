import React, { useRef, useEffect } from 'react';
import Footer from '../../components/student/Footer';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import JobPostingSection from '../../components/student/JobPostingSection';
import CoursesSection from '../../components/student/CoursesSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CallToAction from '../../components/student/CallToAction';
import StepsSection from '../../components/student/StepsSection';
import ErrorBoundary from "../../components/student/ErrorBoundary";
import Navbar from '../../components/student/Navbar'; // Make sure you import Navbar

const Home = () => {
  const jobsRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (jobsRef.current) {
        jobsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('scrollToJobsSection', scrollHandler);
    return () => window.removeEventListener('scrollToJobsSection', scrollHandler);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-7 text-center px-4 md:px-8 lg:px-16">
        <Hero />
        <ErrorBoundary>
          <Companies />
        </ErrorBoundary>
        {/* Attach the ref here */}
        <div ref={jobsRef}>
          <JobPostingSection />
        </div>
        <CoursesSection />
        <StepsSection />
        <TestimonialsSection />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Home;
