import React from "react";
import "./App.css";

// Imports components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

// Imports images
import fireworks from "./img/fireworks.jpg";
import toscane from "./img/toscane.jpg";
import bretagne from "./img/bretagne.jpg";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="container">
        <Header />
        <main>
          <section className="col-1">
            <Content
              title="Title heading 1"
              titleDesc="Title description 1"
              imgSrc={fireworks}
              imgAlt="Feux d'artifice"
              text="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque.

"
            />
            <Content
              title="Title heading 2"
              titleDesc="Title description 2"
              imgSrc={toscane}
              imgAlt="Paysage de la Toscane"
              text="Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula.

"
            />
          </section>
          <section className="col-2">
            <Content
              title="About me"
              titleDesc="Title description 2"
              imgSrc={bretagne}
              imgAlt="Côte Bretonne"
              text="Cras interdum pharetra felis eu faucibus."
            />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
