import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Ken Nguyen
          </a>

          <div className="itemContainer">
            <Person className="icon" />
            <span>+61 404 664 601</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>khangnguyen291@gmail.com</span>
          </div>

          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href="https://www.linkedin.com/in/kennguyen291/" target="_blank">LinkedIn</a>

          </div>

          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span>Github</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
