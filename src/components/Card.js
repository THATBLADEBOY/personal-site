import styled from '@emotion/styled'

const Card = styled.div`
  background: var(--cardbg);
  margin: 20px auto;
  text-align: left;
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

export default Card
