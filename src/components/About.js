import authorPath from "../images/author.png";

export default function About() {
  return (
    <article className='about'>
      <img className='about__img' src={authorPath} alt='author' />
      <div className='about__text'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__subtitle'>
          This block describes the project about. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className='about__subtitle'>
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </article>
  );
}
