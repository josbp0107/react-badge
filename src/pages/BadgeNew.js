import React from 'react';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName="Jose David"
                                lastName="Ballesteros" 
                                josbTitle="Software Engineer"
                                twitter="jose0701"
                                avatar="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        
                        <div className="col-6">
                            <BadgeForm />
                        </div>

                    </div>
                </div>
            </div>
            
        )
    }
}

export default BadgeNew;