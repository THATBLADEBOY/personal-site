import React from 'react'
import Layout from '../components/Layout'
import styled from '@emotion/styled'

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

  @media only screen and (max-width: 420px) {
    padding: 50px 20px;
    margin: 0 5px 10px 5px;
  }
`

const AboutMePage = () => (
  <Layout>
    <AboutMe>
      <p>Software developer living and working in Nashville, TN.</p>
      {/* <div>
        <button onClick={() => 'mailto:aus10b@gmail.com'}>email me ✉️</button>
      </div> */}
    </AboutMe>
  </Layout>
)

export default AboutMePage
