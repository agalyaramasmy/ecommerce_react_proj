import logo2 from '../images/logo2.png';
function Navbar(){
    return(
        <div className="nav">
            <div className="nav1">
              <img src={logo2} alt="logo img" />
              <h2>Arising App</h2>
            </div>
            <div className="nav2">
                <li>
                    <ul>Home</ul>
                    <ul>Services</ul>
                    <ul>Project</ul>
                    <ul>Team</ul>
                    <ul>News</ul>
                    <ul>Contacts</ul>
                </li>
            </div>
        </div>
    )
}
export default Navbar;