import '../style/navStyle.css';


/**
 * Represents the navigation bar component.
 * Displays a navigation menu with links to different pages.
 */
export default function Navbar() {
    return (
        /**
         * Renders the navigation bar.
         *
         * @returns {JSX.Element} The JSX element representing the navigation bar.
         */
        <nav className={'nav'}>
            <a href={'/'} className={'site-title'}>
                <h4>Covid Vaccination App</h4>
            </a>
            <ul>
                <li className={'active'}>
                    <a href={'/register'}><h5>Register</h5></a>
                </li>
                <li>
                    <a href={'/summary'}><h5>Summary</h5></a>
                </li>
            </ul>
        </nav>
    );
}
