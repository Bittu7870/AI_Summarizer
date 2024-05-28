import LOGO from "../assets/logo.svg";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={LOGO} alt="summz_logo" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/Bittu7870")}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className="max-w:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline your reading with Summize, an open-source article summarizer
        that condenses lengthy content into clear and concise summaries.
        Efficient and professional.
      </h2>
    </header>
  );
};

export default Hero;
