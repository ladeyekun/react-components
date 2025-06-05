import Button from './Button';

function Banner(props) {
  let button1 = {text: 'Bookings', isPrimary:true, url:'http://test.com'}
  let button2 = {text: 'Explore', isPrimary:false, url:'http://test.com'}
  return (
    <section className="hero-banner">
      <div className="hero-banner-main">
        <div className="hero-banner-content">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <div className="hero-banner-buttons">
            <Button button={button1} />
            <Button button={button2} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;