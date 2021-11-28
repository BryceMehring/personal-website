import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

export { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export { faGithub } from '@fortawesome/free-brands-svg-icons';
export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
