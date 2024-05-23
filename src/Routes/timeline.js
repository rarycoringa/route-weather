import styled from "styled-components"

const Background = styled.div`
  background-color: #D0D0D0;
  width: 100%;
  min-height: 100vh;
`

const TimelineContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
`

function Timeline () {
    /*
    função criar <DayContainer>

    */
  

  return (
    <Background>
      <TimelineContainer>

      </TimelineContainer>
    </Background>
  );
}

export default Timeline

/*
    <TimelineContainer>
        <DayContainer date={date}/> (0)
        {...}
        <DayContainer date={date}/> (n)
    </TimelineContainer>
*/