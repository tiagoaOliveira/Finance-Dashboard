import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoIosMenu } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";



import './player.css'

function player() {
    return (
        <div className="menu">
            <div className="caminho">
                <p>Inicio</p>
                <HiOutlineChevronDoubleRight className="right-chevron2" />
                <p>Episódios</p>
                <HiOutlineChevronDoubleRight className="right-chevron2" />
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
                    <li>g</li>
                    <li>h</li>
                    <li>i</li>
                    <li>j</li>
                    <li>k</li>
                    <li>l</li>

                </ul>
            </div>
            <div className="content">
                <div className='content-video'>
                    <div className='video-play'></div>
                    <div className='video-control'>   
                        <button> <FaChevronLeft className="left-chevron" />Anterior</button>
                        <button><IoIosMenu className='menu-icon' />
                        Todos os Episódios</button>
                        <button>Próximo <FaChevronRight className="right-chevron" /></button>
                    </div>

                    <div className='about'>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae obcaecati eius sit, pariatur rem nostrum. Consequatur, quod, et commodi, vel qui nisi delectus iste accusamus voluptates voluptatum temporibus rem eligendi.</p>
                    </div>

                    <div className='comments'>
                        <h2> <RxAvatar className='avatar-icon' /> X Comentários</h2>
                    </div>

                    <form className='comment-box' action="">
                        <h3> <BiSolidCommentDetail className="comment-icon" />Deixe um comentário</h3>
                        <input className='add-comment' type="text" placeholder='Comente' />
                        <div className='comment-data'>
                            <div className='data-name'>
                                <h3>Nome</h3>
                                <p>Nome/Apelido</p>
                                <input className='data-box' type="text" />
                            </div>
                            <div className='data-mail'>
                                <h3>E-mail</h3>
                                <p>Seu email não será publicado</p>
                                <input className='data-box' type="text" />
                            </div>
                        </div>
                        <button className='comment-publish'>Publicar comentário</button>
                    </form>
                    <div></div>
                </div>
                <div className='populares'>
                </div>

            </div>
        </div>
    )
}

export default player