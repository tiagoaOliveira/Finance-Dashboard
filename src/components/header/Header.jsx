import "./Header.css"

function HeaderMenu() {
    return (
        <header className="header">
            <div className="header-title"> 
                <h1>Animes Online</h1>
                <nav className="header-nav">
                    <p>Início</p>
                    <p>Lista</p>
                    <p>Gêneros</p>
                </nav>
            </div>    
            <input className="header-input"type="text" placeholder="Search" />
        </header>
    )
}

export default HeaderMenu