/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import UserNinja from '../icons/userNinja'

import config from '../config'
import './styles.scss'

const Header = styled.div`
  max-width: 825px;
  margin: 10px auto;
  padding: 20px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
    color: #0a0a0a;
  }

  .aboutMe {
    margin-right: 30px;
    height: 5px;
  }

  .rightHeader {
    margin-top: 5px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 18px;
    top: 2px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    bottom: -1px;
    background-color: var(--primaryColor);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--primaryColor);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--primaryColor);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    background-color: rgb(240, 240, 240);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet title={config.siteMetadata.title} />
    <main>
      <Header>
        <h3>
          <Link to="/">{config.siteMetadata.header}</Link>
        </h3>
        <div className="rightHeader">
          <Link className="aboutMe" to="/about-me">
            <UserNinja />
          </Link>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  value={!!theme === 'dark'}
                  checked={theme === 'dark'}
                />
                <span class="slider round"></span>
              </label>
            )}
          </ThemeToggler>
        </div>
      </Header>
      {children}
    </main>
  </Fragment>
)

export default TemplateWrapper
