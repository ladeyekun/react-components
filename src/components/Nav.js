function Nav(props) {
  return (
    <nav>
      <ul>
      {props.links.map(link => (
        <li key={link.index} className="nav-item">
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
      </ul>
    </nav>
  );
}

export default Nav;