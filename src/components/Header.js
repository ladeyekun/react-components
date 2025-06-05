import Nav from './Nav';

function Header(props) {
  return (
    <header>
      <div className="container flex flex-between">
        <h1>{props.title}</h1>
        <Nav links={props.links} />
      </div>
    </header>
  );
}

export default Header;