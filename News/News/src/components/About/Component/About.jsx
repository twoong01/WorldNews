import React from 'react';
import {
  AboutTitle,
  AboutContent,
  AboutLine,
  AboutRefernce,
  AboutWrap,
  Icon,
  ContentWrap,
  Content,
  Info,
  IconName,
  ApiName,
} from '../../../styles/StyleSheet';
import Responsive from '../../../assets/Responsive.svg';
import Blub from '../../../assets/Bulb.svg';
import Easy from '../../../assets/Easy.svg';
import Papago from '../../../assets/Papago.svg';
import Rapid from '../../../assets/Rapid.svg';

const About = () => {
  return (
    <AboutWrap>
      <AboutTitle>About</AboutTitle>
      <AboutLine />
      <ContentWrap style={{ fontSize: '18pt', fontWeight: 'bold' }}>
        Development : 2023.08.21 ~ 2023.08.31
      </ContentWrap>
      <AboutContent>Content</AboutContent>
      <AboutLine />
      <ContentWrap>
        <Content>
          <Icon $url={Responsive} />
          <IconName>Responsive</IconName>
          <Info>My WebSite is Responsive</Info>
        </Content>
        <Content>
          <Icon $url={Blub} />
          <IconName>Idea</IconName>
          <Info>You can see world news and many categories</Info>
        </Content>
        <Content>
          <Icon $url={Easy} />
          <IconName>Easy to use</IconName>
          <Info>It is Easy to use</Info>
        </Content>
      </ContentWrap>
      <AboutRefernce>References</AboutRefernce>
      <AboutLine />
      <ContentWrap>
        <Content>
          <ApiName>NewsAPI</ApiName>
        </Content>
        <Content>
          <Icon $url={Papago} />
          <ApiName>PaPagoAPI</ApiName>
        </Content>
        <Content>
          <Icon $url={Rapid} />
          <ApiName>RapidAPi</ApiName>
        </Content>
      </ContentWrap>
    </AboutWrap>
  );
};

export default About;
