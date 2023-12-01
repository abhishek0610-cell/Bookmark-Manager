import logoChrome from '../Assets/logo-chrome.svg';
import logoFirefox from '../Assets/logo-firefox.svg';
import logoOpera from '../Assets/logo-opera.svg';

function Download() {
  return (
    <section className="download" id="download">
      <div className="heading">
        <h1>Download Extension</h1>
        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.</p>
      </div>

      <div className="box-container">
        <div className="box">
          <img src={logoChrome} alt="logo-chrome" />
          <h3>Add to Chrome</h3>
          <p>Minimum Version 63</p>
          <a href="#home" className="all-btn">Install</a>
        </div>

        <div className="box">
          <img src={logoFirefox} alt="logo-firefox" />
          <h3>Add to Firefox</h3>
          <p>Minimum Version 55</p>
          <a href="#home" className="all-btn">Install</a>
        </div>

        <div className="box">
          <img src={logoOpera} alt="logo-opera" />
          <h3>Add to Opera</h3>
          <p>Minimum Version 46</p>
          <a href="#home" className="all-btn">Install</a>
        </div>
      </div>
    </section>
  );
}

export default Download;
