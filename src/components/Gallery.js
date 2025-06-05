function Gallery(props) {
  return (
    <section className="galleries">
      <div className="container">
        <div className="gallery">
          {props.galleries.map(gallery => (
            <div key={gallery.index} className="gallery-item">
              <img src={gallery.src} alt={gallery.title} />
              <h3>{gallery.title}</h3>
              <p>{gallery.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;