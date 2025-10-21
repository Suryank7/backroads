import { menu, socialIcons } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {menu.map((item) => {
          return (
            <li key={item.id}>
              <a href="#about" className="footer-link">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {
          socialIcons.map((item) => {
            const { id, icon, link } = item;
            return <li key={id}>
              <a href={link} className="nav-icon"
              ><i className={item.icon}></i></a>
            </li>
          })
        }
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;