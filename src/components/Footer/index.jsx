import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/Footer.png)" }}>
        <div className="redes">
            <a href='https://www.facebook.com/jesusandres.infantepaez/'>
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href='https://github.com/andresinpa/'>
                <img src="/img/github.png" alt="github" />
            </a>
            <a href='https://www.linkedin.com/in/jesus-infante/'>
                <img src="/img/linkedin.png" alt="linkedin" />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Jesus Infante</strong>
    </footer>
}

export default Footer