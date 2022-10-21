import React from 'react'
import styled from 'styled-components'
import { Heading, InnerWrapper, OuterWrapper } from './Styling'

export const Skills = () => {
  return (
    <OuterWrapper beige>
      <Heading dark>SKILLS</Heading>
      <InnerWrapper>
        <SkillsContent>
          <SkillsColumn>
            <SkillsHeader>CODE</SkillsHeader>
            <SkillsText>    HTML5 CSS3 JavaScript ES6 React Styled Components GitHub</SkillsText>

            <SkillsHeader>UPCOMING</SkillsHeader>
            <SkillsText> Redux Node.js</SkillsText>
          </SkillsColumn>
          <SkillsColumn>
            <SkillsHeader>TOOLBOX</SkillsHeader>
            <SkillsText>   Atom Postman Adobe Photoshop Adobe Illustrator
              Figma Keynote Slack
            </SkillsText>
          </SkillsColumn>
        </SkillsContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const SkillsContent = styled.div`
display: flex;
justify-items: center;
font-family: 'Roboto', sans-serif;
justify-content: center;
column-gap: 50px;
line-height: 25px;
`
export const SkillsColumn = styled.div`
  text-align: center;
  width: 30%;
`

export const SkillsHeader = styled.h6`
color: #D36B00;
padding-top: 10px;
font-size: 20px;
@media (min-width: 1025px) {
  font-size:25px ;
}
`
export const SkillsText = styled.p`
font-size: 17px;
@media (min-width: 1025px) {
  font-size:20px ;
}
`