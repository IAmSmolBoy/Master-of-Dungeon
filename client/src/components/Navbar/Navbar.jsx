import "./Navbar.scss"

export default function Navbar({ type, className, children }) {

    if (!className) className = type

    return (
        <nav className={"nav " + className}>
            <ul className="nav-list">
                <li className="nav-list-item">
                    <h2 className="nav-list-header">{ type }</h2>
                </li>
                {
                    children
                }
            </ul>
        </nav>
    )
}