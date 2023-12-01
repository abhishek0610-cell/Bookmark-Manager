import illustrationHero from '../Assets/illustration-hero.svg';

function Home() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favorite websites. Open a browser tab and see your sites load instantly. Try it for free!!</p>
        <a href="#home" className="home-btn">Get it on Chrome</a>
      </div>
      <div className="image">
        <img src={illustrationHero} alt="illustration-hero" />
      </div>
    </section>
  );
}

export default Home;
