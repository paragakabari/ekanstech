// components/TypingAnimation.js
import React from 'react';
import { ReactTyped } from 'react-typed';

const TypingAnimation = () => {
    return (
        <div>
            <h4>

                <ReactTyped
                    strings={[
                        'Welcome to Ekanstech !',
                        'This is a typing animation.',
                        'You can customize these strings.',
                    ]}
                    typeSpeed={60}
                    backSpeed={30}
                    startDelay={0}
                    loop
                // cursorChar="|"
                />
            </h4>
        </div>
    );
};

export default TypingAnimation;
