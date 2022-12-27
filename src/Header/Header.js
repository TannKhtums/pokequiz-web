import React from 'react';
import './Header.css'
import PokeQuizImage from '../images/pokequiz.png';

const Header = () => {
    return (
        <div className="header">
            <img src={PokeQuizImage} alt="PokeQuiz Logo" />
        </div>
    )
}

export default Header;