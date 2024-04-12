
import logo from "./assets/logo.png"
import styles from "./styles.module.scss"
import meuVideo from './assets/video.mp4';
import insta from "./assets/insta.png"
export const Home = () =>{

    return(
        <main className={styles.main}>
            <header className={styles.header}>
                <img className={styles.img} src={logo} />
            </header>
            <div className={styles.banner}>
                <h1 className={styles.title}>Bem-vindo ao parque estrela! Aqui, a diversão é garantida.</h1>
                <div className={styles.bannerContent}>

                    <iframe className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d629.8712270926226!2d-37.97964392296096!3d-4.943796677458334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1712895236907!5m2!1spt-BR!2sbr"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                    <div className={styles.city}>
                        <h1 className={styles.h1banner}>CHEGAMOS</h1>
                        <h1 className={styles.h2banner}>Russas</h1>
                    </div>

                </div>

            </div>
            <div className={styles.videoc}>
                <h1 className={styles.title}>Clique no vídeo e conheça nosso parque</h1>
                <video className={styles.video} controls autoPlay loop>
                    <source src={meuVideo} type="video/mp4" />
                    Desculpe, seu navegador não suporta vídeos HTML5.
                </video>
                <h1 className={styles.title}>INICIAMOS 13/04 EM RUSSAS-CE</h1>

            </div>
            <div className={styles.ingressos}>
                <h1 className={styles.textI}>INGRESSO POR APENAS:</h1>
                <div className={styles.ingresso}>
                    <h1 className={styles.ingtitle}>INGRESSO</h1>
                    <div className={styles.valor}>
                        <h1 className={styles.ingvalor}>R$</h1>
                        <h1 className={styles.ingval2}>7</h1>
                        <h1 className={styles.spaning}>,00</h1>
                    </div>
                    <h1 className={styles.footeri}>POR BRINQUEDO</h1>
                </div>
            </div>
            <div className={styles.insta}>
                <a href="https://www.instagram.com/parque_estrela1/">               <img src={insta} className={styles.imgi}/></a>

                <div className={styles.textsi}>
                    <h1 className={styles.title}>Nos acompanhe no instagram!</h1>
                    <a href="https://www.instagram.com/parque_estrela1/" className={styles.title}>@parque_estrela1</a>
                </div>

            </div>
            <footer className={styles.footer}>
                <img src={logo} className={styles.logo} />
                <p className={styles.developer}>
                    <span className={styles.textf}>Developed by <a className={styles.link} href="https://wa.me/5588997856125">Gustavo Honorato</a></span>
                    <span className={styles.textf}>Parque Estrela ® 2024 • All rights reserved.</span>
                </p>
            </footer>

        </main>
    )
}

