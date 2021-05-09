import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>

      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>asfasffdasf fadfasf sdf asdfasdf asdf asdafa</SubTitle>
      <Description>
        asdasdASFAFKJFSFDKJSFD dfasf rafaefl lal vasa +dflasfla
        ladfdsfsdsdafasdfl asdflksdflskadfjsadflk sdlfjsadlfkasjdf
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  max-width: 900px;
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.7;

  img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`;

const ImageTitle = styled.div`
  padding: 1em 0;
  height: 30vh;
  min-height: 170px;
  width: 25vw;
  min-width: 320px;
  margin-left: 1em;

  img {
    margin: 3em -1em;
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;

const Controls = styled.div`
  margin-top: 2em;
  padding-top: 4em;
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  padding: 0 1.5em;
  border-radius: 0.4em;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  margin-right: 1.2em;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 3em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 1.2em;

  span {
    font-size: 2em;
    color: white;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const SubTitle = styled.div`
  margin-top: 2.5em;
  line-height: 1.4px;
  font-size: 1em;
`;

const Description = styled.div`
  margin-top: 1em;
  font-size: 1.2em;
`;
