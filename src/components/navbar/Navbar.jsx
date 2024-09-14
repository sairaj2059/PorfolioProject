import './navbar.css';

function Navbar() {
  return (
    <>
      <div className="mainContainer">
        <header>
            <div className="navbar">
                <div className="home nav-button">
                  Home
                </div>
                <div className="Academics nav-button">
                  Academics
                </div>
                <div className="Projects nav-button">
                  Projects
                </div>
            </div>
            <div className="separator"></div>
        </header>
      </div>
    </>
  );
}

export default Navbar;