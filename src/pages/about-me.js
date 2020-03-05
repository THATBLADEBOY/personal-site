import React from 'react'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import DevtoIcon from '../icons/devto'
import LinkedInIcon from '../icons/linkedIn'
import TwitterIcon from '../icons/twitter'

const AboutMe = styled.div`
  color: var(--textTitle);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--cardbg);
  margin: 20px auto;
  box-shadow: 10px 14px 16px -13px rgba(0, 0, 0, 0.75);
  border-style: solid;
  border-color: #121212;
  border-radius: 10px;
  max-width: 800px;
  width: auto;
  padding: 50px ${props => props.padding || 85}px;

  .profileImg {
    vertical-align: middle;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }

  .social {
    margin-top: 5%;
    width: 25%;
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 420px) {
    padding: 50px 20px;
    margin: 0 5px 10px 5px;
  }
`

const AboutMePage = ({ data }) => {
  return (
    <Layout>
      <AboutMe>
        <Img className="profileImg" fluid={data.file.childImageSharp.fluid} />
        <p>Software developer living and working in Nashville, TN.</p>
        <p>
          I'm a full-stack developer at Relode. In my free time you can find me
          at Crema drinking a coffee and eating a Boston Cream 🍩, tutoring and
          mentoring at Nashville Software School, or binge watching Curb Your
          Enthusiasm.
        </p>
        <div className="social">
          <a href="https://dev.to/austinblade" target="blank">
            <DevtoIcon height="50px" />
          </a>
          <a href="https://twitter.com/_austinblade" target="blank">
            <TwitterIcon height="50px" />
          </a>
          <a href="https://www.linkedin.com/in/austin-blade/" target="blank">
            <LinkedInIcon height="50px" />
          </a>
        </div>
      </AboutMe>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "SmokeBomb.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutMePage
