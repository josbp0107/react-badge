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
                    src={this.props.avatar}
                    alt="Avatar" />
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #Conf
                </div>
            </div>
        )
    }

}

export default Badge;

