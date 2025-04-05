import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseList from './CourseList';

const HomeScreen = () => {
  return (
    <div>
        <Header />
        <main style={{background:'#f6f7f9', marginTop:'50px'}}>
            <CourseList />
        </main>
        <Footer />
    </div>
  )
}

export default HomeScreen