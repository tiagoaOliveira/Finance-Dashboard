import './player.css'

function player() {
    return (
        <div className="menu">
            <div className="caminho">
                <p>Inicio</p>
                <p>Episódios</p>
                <p>Título</p>
            </div>
            <div className="caminho-abc">
                <ul>
                    <li>all</li>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                    <li>d</li>
                    <li>e</li>
                    <li>f</li>
                </ul>
            </div>
            <div className="content">
                <div className='content-video'>
                    <div className='video-play'></div>
                    <div className='video-control'>
                        <button>Anterior</button>
                        <button>Todos os Episódios</button>
                        <button>Proximo</button>
                    </div>
                    <div className='about'>

                    </div>
                    <div className='comments'>

                    </div>
                </div>
                <div className='populares'>
                </div>

            </div>
        </div>
    )
}

export default player