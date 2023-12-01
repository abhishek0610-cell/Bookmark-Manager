import logoBookmark from '../Assets/logo-bookmark.svg';


function Navbar(){
    return <>
    <header class="header">
        <div class="logo">
            <img src={logoBookmark} alt="logo-bookmark"></img>
        </div>

        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#download">Download</a>
            <a href="#footer">Contact</a>
            <a href="#home" class="btn">Log in</a>
        </nav>


        <div class="fas fa-bars" id="menu-btn"></div>
    </header>
    </>
}
export default Navbar;