import logoImg from '../assets/Fill213.svg'

export default function Navbar() {
    return (
        <nav className='nav'>
            <img src={logoImg} alt="logo" />
            <p>My Travel Journal.</p>
        </nav>
    )
}