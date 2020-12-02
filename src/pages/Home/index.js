import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Hero title1="Background" title2="development" and="and" subtitle="Convergent the dictates of the consumer: background and development" />
        Home
      </div>
      <Footer />
    </>
  )
}

export default Home
