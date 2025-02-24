import { FaSearch} from "react-icons/fa"
import "./Header.css"

function HeaderMenu() {
    return (
        <header className="header">
            <div className="header-title"> 
                <h1>Streaming</h1>
                <nav className="header-nav">
                    <p>Início</p>
                    <p>Lista</p>
                    <p>Gêneros</p>
                </nav>
            </div>  
            <div className="header-input">
                <input type="text" placeholder="Search" />
                <FaSearch className='search-icon'/>
            </div>  
        </header>
    )
}

export default HeaderMenu