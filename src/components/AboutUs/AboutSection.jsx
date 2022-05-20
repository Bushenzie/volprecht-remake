
const AboutSection = ({name,years,email,birth,from,children:text }) => {
  return (
    <div className="about-section-content">
        <div className="text">
            <h2>Hi, I'm <span id="name">{name}</span></h2>
            <p>{text}</p>
        </div>
        <div className="experience">
            <h1>{years}</h1>
            <h3>Years of <strong>Experience</strong></h3>
        </div>
        <div className="info">
            <div className="item">
                <span>Name:</span>
                <p>{name}</p>
            </div>
            <div className="item">
                <span>Email:</span>
                <p>{email}</p>
            </div>
            <div className="item">
                <span>Date of birth:</span>
                <p>{birth}</p>
            </div>
            <div className="item">
                <span>From:</span>
                <p>{from}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection