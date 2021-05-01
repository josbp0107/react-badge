import React from 'react';
import './styles/Badges.css';
//import confLogo from '../images/nombre_de_la_imagen';

class Badge extends React.Component {
    render() {
        return (
            // Es importante saber que, las clases en jsx cambia su nombre a className
            <div className="Badge">
                <div className="Badge__header">
                    <h1>TechConf</h1>  
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" 
                    src="https://www.gravatar.com/avatar?d=identicon" 
                    alt="Avatar" />
                    <h1>Jose David <br/> Ballesteros</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Software Engineer</h3>
                    <div>@jose0107</div>
                </div>

                <div className="Badge__footer">
                    #Conf
                </div>
            </div>
        )
    }

}

export default Badge;

