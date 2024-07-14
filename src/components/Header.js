// Create your Header component here
const Header = () => {
    return (
        <div ClassName="header">
            <div className="header-logo">
                <a href="#app"><h3 className="header-name">Tashobya Daniel</h3></a>
            </div>
            <div className="header-container">
                <div className="nav-item"><a href="#about">About</a></div>
                <div className="nav-item"><a href="#Projects">Projects</a></div>
                <div className="nav-item"><a href="#skills">Skills</a></div>
            </div>
        </div>
    )
}
export default Header;