import React , {Component} from 'react';
import Sectiontitle from '../Banner/Sectiontitle';
import BlogItems from '../Blog/BlogItems';
import Reveal from 'react-reveal';
import articleData from './ArticleData';

class Blog extends Component{
    render(){
        return(
            <section className="blog_area" id="blog">
                <div className="container">
                    <Sectiontitle Title="Articole" TitleP="Citește daca esti interesat"/>
                    <Reveal effect="fadeInUp" duration={1000}>
                        <div className="row">
                            {articleData.map(el => 
                                <BlogItems key={el.slug} bTitle={el.title} bDetails={el.desc} btnText="Citește" image="post-img2.jpg" Pdata={el.date} slug={el.slug}/>  
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>
        )
    }
}
export default Blog;