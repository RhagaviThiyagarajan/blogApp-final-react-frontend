import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.dribbble.com/users/460129/screenshots/6195419/media/07adc74d75181b4dbfbd946c4dc7c7dc.png?compress=1&resize=1200x900&vertical=top"
        alt=""
      />
    </div>
  )
}

export default Header
