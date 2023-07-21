import React , {useState, useEffect} from 'react';
import './Header.css';

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollpos > currentScrollPos);
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    
      <div className='Header' style= {{ display: isVisible ? 'block' : 'none',position: isVisible ? 'fixed' : 'none', top: isVisible ? '0' : '-50px'  }}>
        
        <div className='menu_options_desktop'>
        <a href='#'><img src={require('./img/logo01.png')} alt='Logo da pagina'/></a>
          <ul>
            <li><a href="#secao01">Soluções</a></li>
            <li><a href="#secao02">Clientes</a></li>
            <li><a href="#secao03">Preços</a></li>
            <li><a href="#secao04">Contato</a></li>
          </ul>
        </div>
      </div>

  );
}

export default Header;
