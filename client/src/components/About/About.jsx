import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  StyledAboutHeader,
  StyledAboutContentContainer,
  StyledAboutContent,
  StyledPic,
  StyledBio,
  StyledLeetCode,
  StyledCarouselContainer,
  StyledCarousel,
} from './about.styled';
import { TechIcons } from './TechIcons';

export default function About() {
  const { ref: myRef, inView: visible } = useInView();
  console.log('visible', visible);

  /* Raw Intersection Observer Method

  const myRef = useRef();
  const [visible, setVisible] = useState();
  useEffect(() => {
    console.log('myRef', myRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  */

  return (
    <section id="About" style={{ position: 'relative' }}>
      <StyledAboutHeader ref={myRef}>
        About
      </StyledAboutHeader>
      <StyledAboutContentContainer>
        <StyledAboutContent>
          <StyledPic>
            <img
              style={{ width: 400, height: 300 }}
              src="file:///Users/benpak/Pictures/StudioGWallPapers/PM5.jpeg"
              alt="placeholder"
            />
          </StyledPic>
          <StyledBio>
            <div>
              HELLO MY NAME IS BENJAMIN. JUST GRADUATED HACK REACTOR. PLEASE HIRE ME!
              BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH
              BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH
              BLAH BLAHBLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAH
              BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH
              BLAH BLAHBLAH BLAH BLAH BLAH BLAH
              BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAH
              BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH
              BLAHBLAH BLAH BLAH BLAH BLAH
              BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH
              BLAH BLAHBLAH BLAH BLAH BLAH BLAH
            </div>
          </StyledBio>
          <StyledLeetCode>
            Daily Leetcode:
            <strong>
              Best Time to Buy and Sell Stock
            </strong>
            <SyntaxHighlighter className="code-block" language="javascript" style={vs2015} showLineNumbers>
              {
`/*
Problem Analysis:
  Two things we're trying to determine:
  when to buy and when to sell
  We want to maximize profit, but profits
  can only be made in buy/sell order
  We want to buy at the lowest possible price,
  and sell at the highest possible price
Planning:
  The idea is to iterate over the array
  while keeping track of the max profits.
  Create a buy variable. This is a placeholder
  variable that will represent the lowest possible price.
  Create a profit variable to keep track of max profits
*/

var maxProfit = function(prices) {
    // set buy variable to the first number by default
    let buy = prices[0];
    // create profit var
    let profit = 0;

    // iterate over the input arr
    // (note: i starts at 1 because we accounted for the first number in the buy var)
    for (let i = 1; i < prices.length; i++) {
        // we're looking for the lowest possible price to buy.
        // if buy value is greater than the current price,
        // we want to replace the buy var with the lower number
        if (buy > prices[i]) {
            buy = prices[i];
        // if however, the current price is greater than the current buy variable
        // (which satisfies the buy/sell order for profit [sell day comes after buy day]),
        // we want to keep track of the profit
        } else {
            // Math.max will take multiple parameters and output the biggest number.
            // Here we are comparing the new potential profit with the existing profit.
            // This way, we can save the max profit amount
            profit = Math.max(prices[i] - buy, profit);
        }
    }
    // then, simply return the max profit amount
    return profit;
};`
              }
            </SyntaxHighlighter>
          </StyledLeetCode>
        </StyledAboutContent>
      </StyledAboutContentContainer>
      <StyledCarouselContainer>
        <StyledCarousel>
          <img src={TechIcons.javascript} alt="javascript icon" />
          <img src={TechIcons.react} alt="react icon" />
          <img src={TechIcons.express} alt="express icon" />
          <img src={TechIcons.node} alt="node icon" />
          <img src={TechIcons.mongodb} alt="mongodb icon" />
          <img src={TechIcons.postgres} alt="postgres icon" />
          <img src={TechIcons.mysql} alt="mysql icon" />
          <img src={TechIcons.html} alt="html icon" />
          <img src={TechIcons.css} alt="css icon" />
          <img src={TechIcons.git} alt="git icon" />
          <img src={TechIcons.github} alt="github icon" />
          <img src={TechIcons.rest} alt="rest icon" />
          <img src={TechIcons.websocket} alt="websocket icon" />
          <img src={TechIcons.vscode} alt="vscode icon" />
          <img src={TechIcons.postman} alt="postman icon" />
          <img src={TechIcons.sass} alt="sass icon" />
          <img src={TechIcons.tailwind} alt="tailwind icon" />
          <img src={TechIcons.figma} alt="figma icon" />
          <img src={TechIcons.npm} alt="npm icon" />
          <img src={TechIcons.jest} alt="jest icon" />
          <img src={TechIcons.chai} alt="chai icon" />
          <img src={TechIcons.mocha} alt="mocha icon" />
          <img src={TechIcons.webpack} alt="webpack icon" />
          <img src={TechIcons.bash} alt="bash icon" />
          <img src={TechIcons.docker} alt="docker icon" />
          <img src={TechIcons.nginx} alt="nginx icon" />
          <img src={TechIcons.aws} alt="aws icon" />
        </StyledCarousel>
        <StyledCarousel>
          <img src={TechIcons.javascript} alt="javascript icon" />
          <img src={TechIcons.react} alt="react icon" />
          <img src={TechIcons.express} alt="express icon" />
          <img src={TechIcons.node} alt="node icon" />
          <img src={TechIcons.mongodb} alt="mongodb icon" />
          <img src={TechIcons.postgres} alt="postgres icon" />
          <img src={TechIcons.mysql} alt="mysql icon" />
          <img src={TechIcons.html} alt="html icon" />
          <img src={TechIcons.css} alt="css icon" />
          <img src={TechIcons.git} alt="git icon" />
          <img src={TechIcons.github} alt="github icon" />
          <img src={TechIcons.rest} alt="rest icon" />
          <img src={TechIcons.websocket} alt="websocket icon" />
          <img src={TechIcons.vscode} alt="vscode icon" />
          <img src={TechIcons.postman} alt="postman icon" />
          <img src={TechIcons.sass} alt="sass icon" />
          <img src={TechIcons.tailwind} alt="tailwind icon" />
          <img src={TechIcons.figma} alt="figma icon" />
          <img src={TechIcons.npm} alt="npm icon" />
          <img src={TechIcons.jest} alt="jest icon" />
          <img src={TechIcons.chai} alt="chai icon" />
          <img src={TechIcons.mocha} alt="mocha icon" />
          <img src={TechIcons.webpack} alt="webpack icon" />
          <img src={TechIcons.bash} alt="bash icon" />
          <img src={TechIcons.docker} alt="docker icon" />
          <img src={TechIcons.nginx} alt="nginx icon" />
          <img src={TechIcons.aws} alt="aws icon" />
        </StyledCarousel>
      </StyledCarouselContainer>
    </section>
  );
}
