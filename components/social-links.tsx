'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faMedium } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-4'>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.codepen.io/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCodepen} size="2x" />
            </a>
            <a href="https://www.medium.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;