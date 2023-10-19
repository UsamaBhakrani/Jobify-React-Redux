import Logo from "../components";
import main from "../assets/images/main.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <main>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, totam?
            Quo illo error magni, tempora nobis aspernatur, eveniet doloribus ab
            accusamus sed voluptatem eligendi non! Atque, quo ipsam doloribus
            accusamus non aperiam commodi quisquam esse consequuntur laudantium
            quia aliquid animi optio! Minima modi tempore excepturi. Commodi
            labore aliquam iure doloremque.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="main image" className="img main-img" />
      </div>
    </main>
  );
};
const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
