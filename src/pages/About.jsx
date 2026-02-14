import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";

function About() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="container text-center">
          <h2 className="about-title">About Lunara</h2>
          <p className="about-subtitle text-light">
            Moonstone jewellery inspired by calm elegance and timeless beauty.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-content">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6 fade-left">
              <h3 className="section-title">Our Story</h3>
              <p>
                Lunara was born from the quiet beauty of moonlight. Inspired by the
                natural glow of moonstone, our jewellery reflects balance, grace,
                and refined luxury.
              </p>
              <p>
                We believe jewellery should feel personal — a subtle expression of
                elegance that becomes part of your everyday moments.
              </p>
            </div>

            <div className="col-md-6 text-center fade-right">
              <img
                src={about1}
                alt="Moonstone Jewellery"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="founder-section">
        <div className="container text-center">
          <h3 className="section-title">A Message From the Founder</h3>
          <p className="founder-text">
            “Lunara was created from my love for moonstones and minimal design.
            I wanted to craft jewellery that feels calm, powerful, and deeply
            personal. Each piece is designed to glow softly — just like moonlight.”
          </p>
          <p className="founder-name">— Founder, Lunara</p>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <h3 className="text-center section-title mb-4">
            What We Stand For
          </h3>

          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="value-card value-animate">
                <h5>Craftsmanship</h5>
                <p>Thoughtfully designed and finished with precision.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card value-animate">
                <h5>Authentic Materials</h5>
                <p>Natural moonstones paired with refined metals.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card value-animate">
                <h5>Timeless Design</h5>
                <p>Minimal forms that remain elegant beyond trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="philosophy-section">
        <div className="container text-center">
          <h3 className="section-title">Our Design Philosophy</h3>
          <p className="philosophy-text">
            At Lunara, design begins with stillness. Inspired by moonlight,
            we create jewellery that feels effortless and timeless — pieces
            that enhance the wearer rather than overpower them.
          </p>
        </div>
      </section>

      {/* CRAFT PROCESS */}
      <section className="craft-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6 fade-left">
              <h3 className="section-title">Crafted With Intention</h3>
              <p>
                Every Lunara piece is carefully refined — from selecting
                moonstones to achieving the perfect finish.
              </p>
              <p>
                True luxury is created with intention, not haste.
              </p>
            </div>

            <div className="col-md-6 fade-right text-center">
              <img
                src={about2}
                className="about-img"
                alt="Jewellery Craft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL CONNECTION */}
      <section className="emotion-section">
        <div className="container text-center">
          <h3 className="section-title">More Than Jewellery</h3>
          <p className="emotion-text">
            Lunara jewellery is designed to accompany life’s meaningful
            moments — celebrations, reflections, and memories.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
