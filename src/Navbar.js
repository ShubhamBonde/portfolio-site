import logo from "../static/images/logo.png";

const Navbar = ({ title }) => {
  let links = ["Home", "Resume", "Projects", "Contact", ""]; // expression
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" height="50px" width="70px"></img>
        <h1>{title}</h1>
      </div>
      <ul>
        {/* You cannot write expression in JSX without {} */}
        {links.map((link)=> (
            <li><a href={`/page/${link}`}>{link}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
