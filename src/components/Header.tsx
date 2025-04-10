import '../styles/global.css'
export function Header() {
  return (
    <header className="header">
      <h1 className="">My Application</h1>
      <nav>
        <ul className="nav">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}