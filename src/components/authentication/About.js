export default function About() {
  return (
    <div
      className="w-100"
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        background:
          "linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 25%)), url(https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700363293.jpg)",
        backgroundSize: "cover",
      }}
    >
      <header style={{ position: "relative", zIndex: "1" }}>
        <h1
          className="text-uppercase text-center"
          style={{
            fontFamily: "'Tourney', cursive",
            color: "#fff",
            fontSize: "56px",
            fontWeight: "bold",
            backgroundColor: "rgba(31, 62, 88, 0.425)",
          }}
        >
          About
        </h1>
        <p
          className="text-center mt-5 pb-5 mx-auto"
          style={{
            fontFamily: "'Caveat', cursive",
            color: "#b5414b",
            width: "90vw",
            filter: "drop-shadow(1px 1px #fff3f3)",
            fontSize: "2.5rem",
          }}
        >
          Extraspace Cloud: A cloud where you can create folders, upload files
          and links and can access it from anywhere...
        </p>
      </header>
      <div className="mt-5 px-4 fs-4" style={{ color: "hwb(0deg 90% 10%)" }}>
        <p className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          The code repository of the application can be accessed on GitHub
          through the link below
        </p>

        <button
          className="btn d-block mx-auto fs-3 px-4 mb-5"
          style={{ background: "black", color: "#fff" }}
        >
          <a
            href="https://github.com/srivastavaritik/extraspace-cloud"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Github
          </a>
        </button>
        <p className="pt-5">
          Although there are many such applications available on the internet,
          this application is quite unique when it comes to its features and
          use-cases.
        </p>
        <p>
          Users can create their account here and start uploading their files,
          folders and links.
        </p>
        <p>
          <strong>Data security</strong> is necessary and is a right of all
          internet users. Keeping that in mind we are now working on making our
          application decentralized with the help of <strong>blockchain</strong>
          .
        </p>
        <p className="mt-5">
          After the implementation of blockchain in our application:
        </p>
        <ul>
          <div className="ms-4">
            <li>
              The users can use it with the help of their MetaMask wallet.
            </li>
            <li>
              Users will be able to track and store their crypto transaction
              directly through our application which will guarantee privacy and
              data security to all its users in a real sense.
            </li>
            <li>
              Since the application will be decentralized, there is no chance of
              data breach or privacy/security issues.
            </li>
          </div>
        </ul>
        <p className="text-center text-uppercase mt-5 py-3 text-decoration-underline">
          The main theme of our application is Data Security.
        </p>
      </div>

      <img
        style={{
          width: "300px",
          position: "absolute",
          transform: "rotate(45deg)",
          animation: "rocketfly 5s linear alternate-reverse",
          top: 0,
        }}
        src="https://www.freepnglogos.com/uploads/rocket-png/rocket-cartoon-transparent-png-svg-vector-19.png"
        alt="rocket vector"
      />
    </div>
  );
}
