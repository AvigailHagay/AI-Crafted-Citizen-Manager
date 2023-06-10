import './navStyle.css';


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
                Covid Vaccination App
            </a>
            <ul>
                <li className={'active'}>
                    <a href={'/register'}>Register</a>
                </li>
                <li>
                    <a href={'/summary'}>Summary</a>
                </li>
            </ul>
        </nav>
    );
}
