import illustrationFeaturesTab1 from '../Assets/tab.svg';
import illustrationFeaturesTab2 from '../Assets/illustration-features-tab-2.svg';
import illustrationFeaturesTab3 from '../Assets/illustration-features-tab-3.svg';

function Features() {
  return (
    <section className="features" id="features">
      <div className="heading">
        <h1>Features</h1>
        <p>Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>

      <div className="row">
        <div className="image">
          <img src={illustrationFeaturesTab1} alt="illustration-features-tab-1" />
        </div>

        <div className="content">
          <h1>Bookmark in one click</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint odit tempora, maiores quos qui quisquam accusamus ad officiis sapiente.</p>
          <a href="#home" className="all-btn">More info</a>
        </div>

        <div className="content">
          <h1>Intelligent search</h1>
          <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
          <a href="#home" className="all-btn">More info</a>
        </div>

        <div className="image">
          <img src={illustrationFeaturesTab2} alt="illustration-features-tab-2" />
        </div>

        <div className="image">
          <img src={illustrationFeaturesTab3} alt="illustration-features-tab-3" />
        </div>

        <div className="content">
          <h1>Share your bookmarks</h1>
          <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
          <a href="#home" className="all-btn">More info</a>
        </div>
      </div>
    </section>
  );
}

export default Features;
