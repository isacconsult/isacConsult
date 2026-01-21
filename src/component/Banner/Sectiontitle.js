import React, {Component} from 'react';
import Reveal from 'react-reveal';
class Sectiontitle extends Component {
    render(){
        var {Title, TitleP, hideLIne} = this.props;
        return(
            <div className="section_title text-center">
                <Reveal  effect="fadeInUp"><h2 className="mb_0 title_h2 t_color">{Title}</h2></Reveal>
                <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">{TitleP}</p></Reveal>
                {!hideLIne 
                    ? <Reveal  effect="fadeInLeft" duration={2000}><span className="bottom_line"></span></Reveal> 
                    : <span style={{ margin: "25px auto", display: "block"}}/>
                }
            </div>
        )
    }
}
export default Sectiontitle;