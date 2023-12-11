import img from "../assets/sattam_image.png"

const Banner = () => {
  const resumeLink = 'https://drive.google.com/uc?id=16FB6l4UdhihWulwhedmqslRAU4My4jJo';

  const handleDownload = () => {
    window.location.href = resumeLink;
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg " alt="Profile" />
          <div>
            <h1 className="text-6xl font-bold">
              Hello! I’m
              <br />
              Sattam Chakma
            </h1>
            <p className="py-6">UI/UX Designer specializing in Shopify & Webflow.</p>
            <button className="btn btn-primary" onClick={handleDownload}>
              Get Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
