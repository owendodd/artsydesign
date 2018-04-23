import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

export default styled.div`
  .Body {
    text-align: left;
    font-family: "Adobe Garamond W08", Times;
    font-weight: regular;
    font-size: 22px;
    line-height: 30px;
    max-width: 680px;
    margin: 10vh auto;
  }
  .Link {
    text-decoration: underline;
    width: auto;
    display: inline-block;
      text-decoration-style: dashed;
      cursor: pointer;
  }

  .__react_component_tooltip {
    background-color: #fff;
    max-width:340px;
    opacity: 0;
    color: #000;
    /* border: 1px solid #e5e5e5; */
    border-radius: 0;
    transition: all 250ms;
    padding: 20px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.15);
  }
    
    .Images {
      width: 320px;
      display: flex;
      white-space: nowrap;
      margin-bottom: 10px;
    }
      .Images img {
        margin-right: 10px;
      }
      
      #nick .Images img{
        height: 161px;
      }

    .Info {
      position: relative;
    }
      .Name {
        font-family:"Adobe Garamond W08";
        font-weight: 600;
        font-size: 18px;
        line-height: 20px; 
        margin-bottom: 3px;
      }
      .Nation {
        font-family: "Unica77LLWebMedium";
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 10px
      }
      .Bio {
        font-family:"Adobe Garamond W08";
        font-weight: 400;
        font-size: 14px;
        line-height: 18px; 
      }
      .ReadMore {
        text-decoration: underline;
        display: inline-block;
      }
      .Follow {
        font-family: "Unica77LLWebMedium";
        font-size: 12px;
        line-height: 14px; 
        display: block;
        float: right;
        right: 0px;
        cursor: pointer;
        top: 0px;
        position: absolute;
        padding: 5px 10px;
        border: 1px solid #e5e5e5;
      }
      .Follow:hover {
        color: #fff;
        background-color: #000;
      }

  .__react_component_tooltip.show {
    opacity: 1;
  }

`;


injectGlobal`
  @import url('https://webfonts.artsy.net/unica-webfonts.css');
  @import url('https://webfonts.artsy.net/force-webfonts.css?a=b');
  }
` 
