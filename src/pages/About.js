import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page.jpg';
import AboutInfoItems from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Ahmad Rizani</span>
              </p>
              <h2 className="about__heading">
                Web developer and data analysis
              </h2>
              <div className="about__info">
                <PText>
                  I am from Tanah Grogot, Kalimantan Timur. A place of beauty
                  and nature.
                  <br /> <br />
                  I started coding since undergraduate student. Coding is an art
                  for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="https://drive.google.com/file/d/1GGfC-9OKgNBGVNU10CUqKwGKMPzosSv4/view?usp=sharing"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItems
                title="School"
                items={['SMA Muhammadiyah, Tanah Grogot']}
              />
              <AboutInfoItems
                title="Bachelor"
                items={['Physics, Universitas Negeri Yogyakarta']}
              />
              <AboutInfoItems
                title="Master"
                items={['Physics, Universitas Gajah Mada']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItems
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItems
                title="BackEnd"
                items={['Node', 'Express', 'SQL', 'MongoDb']}
              />
              <AboutInfoItems
                title="Design"
                items={['Photoshop', 'Adobe illustrator', 'Canva']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItems
                title="2016-2017"
                items={['Manager teen program at english cafe']}
              />
              <AboutInfoItems
                title="2019-2020"
                items={['Physics tutor at brilliat internation']}
              />
              <AboutInfoItems
                title="2020-"
                items={[
                  'Part time tutor statistics social at universitas terbuka',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
