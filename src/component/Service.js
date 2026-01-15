import React, {Component} from 'react';
import Sectiontitle from '../component/Banner/Sectiontitle';

class Service extends Component{
    render(){
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                    <Sectiontitle Title="CE FAC (CLAR, DIFERENȚIATOR)" TitleP="Ascult descrierea ta despre cealaltă persoană,
                        identific tipologia ei comportamentală și completez cu observații bazate pe comportamentele prezentate.
                        Apoi îți spun ce comportament să folosești
                        și cum să-l aplici.
                        ⚠️ Nu vorbim despre tine.
                        Lucrăm pe celălalt."/>
                </div>
            </section>
        )
    }
}

export default Service;