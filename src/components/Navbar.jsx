import logo from "../assets/react.svg";

export default function Header() {
	return (
		<>
			<nav>
				<img className="nav--icon" src={logo} />
				<h3 className="nav--logo_text"> ReactFacts</h3>
				<h4 className="nav--title">React Course - Project 1</h4>
			</nav>
		</>
	);
}
