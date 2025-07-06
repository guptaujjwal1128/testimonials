import "./App.scss";
const images = import.meta.glob("./assets/images/*", {
  eager: true,
  import: "default",
});
function getImage(filename: string): string {
  const fetchedImg = images[`./assets/images/${filename}`];
  if (!fetchedImg || typeof fetchedImg !== "string") {
    throw new Error("Invalid file path");
  }
  return fetchedImg;
}

const data = [
  {
    avatar: {
      name: "Daniel Clifford",
      role: "Verified Graduate",
      imgSrc: getImage("image-daniel.jpg"),
    },
    heading:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    description:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
  },
  {
    avatar: {
      name: "Jonathan Walters",
      role: "Verified Graduate",
      imgSrc: getImage("image-jonathan.jpg"),
    },
    heading: "The team was very supportive and kept me motivated",
    description:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
  },
  {
    avatar: {
      name: "Jeanette Harmon",
      role: "Verified Graduate",
      imgSrc: getImage("image-jeanette.jpg"),
    },
    heading: "An overall wonderful and rewarding experience",
    description:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  },
  {
    avatar: {
      name: "Patrick Abrams",
      role: "Verified Graduate",
      imgSrc: getImage("image-patrick.jpg"),
    },
    heading:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    description:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
  },
  {
    avatar: {
      name: "Kira Whittle",
      role: "Verified Graduate",
      imgSrc: getImage("image-kira.jpg"),
    },
    heading: "Such a life-changing experience. Highly recommended!",
    description:
      "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.",
  },
];

function App() {
  return (
    <>
      <main className="container">
        {data.map((testimonial, index) => (
          // TODO: article aria label
          <article key={index} className="card">
            <header className="avatar">
              <img
                src={testimonial.avatar.imgSrc}
                alt={testimonial.avatar.name + " " + "Image"}
                className="avatar-img"
              />
              <section className="avatar-details">
                <h2 className="avatar-details-name">
                  {testimonial.avatar.name}
                </h2>
                <p className="avatar-details-role">{testimonial.avatar.role}</p>
              </section>
            </header>
            <h3 className="heading">{testimonial.heading}</h3>
            <blockquote className="desc">
              <p>{testimonial.description}</p>
            </blockquote>
          </article>
        ))}
      </main>
      <footer>
        <div className="attribution">
          Challenge by &nbsp;
          <a
            href="https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by &nbsp;
          <a
            href="https://www.frontendmentor.io/profile/guptaujjwal1128"
            target="_blank"
          >
            Ujjwal Gupta
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
