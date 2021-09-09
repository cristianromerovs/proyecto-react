import CartWidget from "./CartWidget"

const Navbar = ({ item1, item2, item3, item4 }) => {
    return (
      <div className="container-fluid bg-dark">
          <ul className="d-flex justify-content-center px-0 py-4">
              <div className="mx-3"><a href="#home" className="link-light">{ item1 }</a></div>
              <div className="mx-3"><a href="#products" className="link-light">{ item2 }</a></div>
              <div className="mx-3"><a href="#about" className="link-light">{ item3 }</a></div>
              <div className="mx-3"><a href="#contact" className="link-light">{ item4 }</a></div>
              <CartWidget />
          </ul>
      </div>
    );
}

export default Navbar


