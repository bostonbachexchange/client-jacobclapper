import headshot from "../assets/images/headshot.JPG";
import {
  HomeSection,
  Header,
  BioContent,
  ImageWrapper,
  HeadshotImage,
  BioText,
  Footer,
} from "./Home.styles";

const Home = () => {
  return (
    <HomeSection>
      <Header>Biography</Header>
      <BioContent>
        <ImageWrapper>
          <HeadshotImage src={headshot} alt="Jacob Clapper" />
        </ImageWrapper>
        <BioText>
          <p>
            Jacob Clapper is a versatile pianist, educator, and software
            developer based in Massachusetts. He currently serves as Music
            Director at the Unitarian Universalist All Souls Church in
            Braintree, a position he has held since 2015. In addition to leading
            services and programming there, Jacob is an active faculty member at
            South Shore Conservatory, where he teaches private piano, music
            theory, and facilitates student workshops and recitals. His work at
            SSC emphasizes both artistic excellence and inclusive community
            engagement.
          </p>
          <p>
            Jacob’s collaborative piano work includes past engagements with
            Curry College, where he served as a staff accompanist and private
            lesson instructor from 2016 to 2020, and with Duxbury Public
            Schools, where he performed in national venues such as Carnegie Hall
            and Strathmore with the high school’s chamber choir. He currently
            teaches students in Duxbury, Melrose, and Hingham.
          </p>
          <p>
            A native of Texas, Jacob earned his Bachelor of Music degree from
            Texas A&M University-Commerce in 2011 and went on to complete his
            Master of Music in Piano Performance at the University of Florida,
            where he also served as a graduate teaching assistant. He has
            studied with renowned teachers including Luis Sanchez and Kevin Orr,
            and has performed at festivals such as the University of Florida
            International Piano Festival and in recitals at Steinway Hall.
          </p>
          <p>
            In addition to his work in music, Jacob is a trained full-stack
            software engineer, having completed a software engineering immersive
            at General Assembly. He has experience with JavaScript, React,
            Node.js, MongoDB, and Python, and enjoys building web applications
            that support creatives and educators. He has developed tools for
            music studios, online portfolios, and community organizations,
            combining his love of technology with his passion for the arts.
            Learn more at his developer site:{" "}
            <a
              href="https://jacobclapper.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              jacobrclapper.dev
            </a>
          </p>
        </BioText>
      </BioContent>
      <Footer>
        <address>
          <strong>Reach me: </strong>
          <a href="mailto:clapperpianist@gmail.com">clapperpianist@gmail.com</a>
        </address>
      </Footer>
    </HomeSection>
  );
};

export default Home;
