import styled from 'styled-components'


export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 1000px;
  width: 100%;
  background: transparent;
  margin: 0;
  
`

export const TextContainer = styled.div`
   
   background: transparent;
   width: 100%;
   height: 80px;
   margin-top: 0;
   top: 0;
`

export const FAQTitle = styled.h1`
   font-family: 'NexaBold';
   color: #F8F5B3;
   margin-top: 0;
`

export const Container = styled.div`
  position: relative;
  top: 1%;
  width: 90%;
  max-width: 1100px
`

export const Wrap = styled.div`
  background: transparent;
  color: #F8F5B3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  text-align: center;
  cursor: pointer;
  h1 {    
    padding: 2rem;
    font-family: 'NexaBold';
    font-size: 2rem;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
      padding: 1rem;
      text-align: left;
    }
  }
  span {
    margin-right: 1.5rem;
  }
`

export const Dropdown = styled.div`
  background: transparent;
  font-family: 'NexaLight';
  color: #F8F5B3;
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 30px;
  text-align: left;
  -webkit-transition: all .25s ease;
  margin-bottom:20px;


  p {
    font-size: 2rem;
    @media screen and (max-width: 600px) {
      font-size: 1rem;      
    }
  }

// enter from
&.fade-enter {
    opacity: 0;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to 
  &.fade-exit-active {
    opacity: 0;
  }

`