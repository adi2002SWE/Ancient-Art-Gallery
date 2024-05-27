import React from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";
import product10 from "../../assets/16.jpg";
import product11 from "../../assets/17.jpg";
import product12 from "../../assets/18.jpg";
import clickMeImg from "../../assets/19.png";
import historyImage from "../../assets/21.jpeg";
import impressionismImage from "../../assets/22.jpg";
import expressionismImage from "../../assets/23.webp";
import abstractImage from "../../assets/24.jpg";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className="About-page-1">
      <div className="About-page-2">
        <h1><u>The Complicated World of Arts</u></h1>

        <p className="quote">“In art, the hand can never execute anything higher than the heart can imagine.” – <t>Ralph Waldo Emerson</t></p>

        <article>Mark Rothko, an American artist who described himself as an “abstract painter”, once said about art that he was not the kind of person interested in the relationship of form, color, or similars. He didn’t define himself as an abstractionist, but rather as a person interested only in expressing basic human emotions such as doom, tragedy, ecstasy, and so on.</article>
        <article>Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas.</article>

        <div className="Image">
          <article className="product10" style={{ backgroundImage: `url(${product10})` }}>
            <h1 className="product10_text">“The object of art is not to reproduce reality, but to create a reality of the same intensity.”</h1>
          </article>
          <article className="product11" style={{ backgroundImage: `url(${product11})` }}>
            <h1 className="product11_text">"Painting is just another way of keeping a diary."</h1>
          </article>
          <article className="product12" style={{ backgroundImage: `url(${product12})` }}>
            <h1 className="product12_text1">“Every artist dips his brush in his own soul, and paints his own nature into his pictures.”</h1>
          </article>
        </div>

        <section>
          <h2>Brief History of Art</h2>
          <div className="history-section">
            <img src={historyImage} alt="History of Art" className="history-image" />
            <article>Art has been a part of human culture since the earliest days of civilization. From the cave paintings of prehistoric times to the digital art of today, the history of art is a rich tapestry of creativity and innovation. Major periods include the Classical era, where Greek and Roman art flourished; the Renaissance, which marked a revival of classical learning and wisdom; the Baroque period, known for its exuberance and grandeur; and the Modern era, characterized by a diversity of styles and the advent of digital media.</article>
          </div>
        </section>

        <section>
          <h2>Art Movements</h2>
          <div className="art-movements">
            <article className="art-movements-contents">
              <img src={impressionismImage} alt="Impressionism" className="movement-image" />
              <h3>Impressionism</h3>
              <p>Impressionism emerged in the late 19th century and focused on capturing the momentary effects of light and color. Artists like Claude Monet and Edgar Degas are notable figures of this movement. The style is characterized by small, thin brush strokes, open composition, and an emphasis on accurate depiction of light in its changing qualities.</p>
            </article>
            <article className="art-movements-contents">
              <img src={expressionismImage} alt="Expressionism" className="movement-image" />
              <h3>Expressionism</h3>
              <p>Expressionism, which developed in the early 20th century, aimed to represent emotional experiences rather than physical reality. Key artists include Edvard Munch and Wassily Kandinsky. This movement is marked by distorted forms, bold colors, and a focus on conveying subjective emotions.</p>
            </article>
            <article className="art-movements-contents">
              <img src={abstractImage} alt="Abstract Art" className="movement-image" />
              <h3>Abstract Art</h3>
              <p>Abstract art uses shapes, colors, forms, and gestural marks to achieve its effect rather than depicting objects realistically. Famous abstract artists include Jackson Pollock and Piet Mondrian. This style emphasizes the visual elements of art themselves, such as line, color, and form, rather than representing something from the real world.</p>
            </article>
          </div>
        </section>

        <section>
          <h2>Visit Our Gallery</h2>
          <article>Immerse yourself in the world of art by visiting our gallery. Discover an array of artworks from various periods and movements, and get inspired by the creative expressions of talented artists.</article>
          <div className="VisitGallery">
            <button className="VisitButton" onClick={() => navigate("/")}>Visit Gallery</button>
          </div>
        </section>

        <p className="quote">“Color is the place where our brain and the universe meet.” – <t>Paul Klee.</t></p>

        <p className="quote">“Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.” – <t>George Bernard Shaw</t></p>

        <div className="GoForShop">
          <img className="ClickMe" onClick={() => navigate("/")} src={clickMeImg} alt="ClickMe" />
          <div className="ForShopping">for shopping...</div>
        </div>
      </div>
    </div>
  );
};
