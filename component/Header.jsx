const Title = () => (
  <>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimKS0-E61jy_dctanYVq2rzxMV35RExo-Aw&s"
      alt="logo"
      className="logo"
    />
  </>
);

export const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-list">
      <ul>
        <li id="menu-home">Home</li>
        <li id="menu-about">About</li>
        <li id="menu-contact">Contact</li>
        <li id="menu-cart">Cart</li>
      </ul>
    </div>
  </div>
);
