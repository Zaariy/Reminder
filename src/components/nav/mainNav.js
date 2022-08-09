import Navmenu from "./navMenu";
import NavHeader from "./navHeader";
import './style/nav.css'

function MainNav({lang}) {
    
    
    return (
        <div className="main-nav">
            <NavHeader lang={lang} />
            <Navmenu lang={lang} />
        </div>

    )
}

export default MainNav;