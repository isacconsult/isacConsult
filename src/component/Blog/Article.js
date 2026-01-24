
import React from 'react';
import { lazy, Suspense } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import PBanner from '../../component/Banner/ParticlesBanner';
import Footer from '../../component/Footer';
import isacData from '../isacData';
import articleData from '../../component/Blog/ArticleData';
import { useParams } from 'react-router-dom';

export const Article = () => {
  const { slug } = useParams(); // gets :slug from URL
  const article = articleData.find(el => el.slug === slug)
  
  const Art = lazy(() =>
    import(`./Articles/${slug}`)
      .catch(() => ({
        default: () => <div>Article "{slug}" not found</div>
      }))
  );

  
  return <div className="body_wrapper">
    <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>  
    <PBanner articleData={article} imag="Sail-Away.jpg"/>
    <section className='work_area'>
      <div className="container">
        <div className="section_title text-center">
        <Suspense fallback={<div>Loading...</div>}>
            <Art />
        </Suspense>
        </div>
      </div>
    </section>
    <Footer isacData={isacData}/>
  </div>
}
  
  


