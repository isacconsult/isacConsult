import { Component } from 'react';
import Reveal from 'react-reveal';
import { Link } from 'react-router-dom'

class PsihologVsEu extends Component{
    render(){
        var {wClass} = this.props
        return(
            <section className={`${wClass}`}>
                <div className="container">
                  <div className="section_title text-center">
                    <Reveal  effect="fadeInUp"><h2 className="mb_0 title_h2 t_color">CE FACE ISAC</h2></Reveal>
                    <Reveal  effect="fadeInUp"><h4 className="mb_0  t_color">ŞI CE FACE PSIHOLOGUL</h4></Reveal>
                    <Reveal  effect="fadeInUp"><h4 className="mb_0 t_color">(PE ROMÂNEŞTE)</h4></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <h5 className=" title_p bigger">ISAC te ajută să nu mai pățesti acelși lucru.</h5>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p>Psihologul te ajută să te înțelegi.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <h5 className=" title_p bigger">ISAC lucrează cu ce se întâmplă între tine și ceilalți.</h5>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p>Psihologul lucrează cu ce este în capul tău.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <h5 className="title_p bigger">ISAC reduce suferința schimbând situația concretă.</h5>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p>Psihologul o reduce prin explicație.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <h5 className="title_p bigger">ISAC schimbă jocul în care omul trăiește.</h5>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p>Psihologia explică omul.</p>
                    </Reveal>
                     <Reveal  effect="fadeInUp" duration={1500}>
                      <Link className="theme_btn nav-link" to="/articole/treizeciunu">👉 Citește</Link>
                     </Reveal>
                  </div>
                </div>
            </section>
        )
    }
}

export default PsihologVsEu;