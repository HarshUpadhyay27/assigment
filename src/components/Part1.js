import React from "react";
import Part2 from "./Part2";

const Part1 = () => {
  return (
    <div className="part1">
      <div className="container1">
        <div>
          <h1>Banking on the go</h1>
          <h2>Earn 1.20% on Deposits & 5% Cashback</h2>
          <p>
            A modern checking account for hard working professionals that
            provides higher savings, faster support and peace of mind.
          </p>
          <div>
            <button className="black">Start Learning Now</button>
            <button className="white">Get The App</button>
          </div>
        </div>
        <div className="img-container" >
          <img
            src="https://cdn.onjuno.com/home/landing_hero_image%403x.png"
            alt="..."
          />
        </div>
      </div>
       <div className="brands">
        <p>AS SEEN ON</p>
        <img
          src="https://cdn.onjuno.com/remittance/publicaation.svg"
          alt="..."
        />
      </div>
      <div className="globle">
        <ul>
          <li>
            <img src="https://cdn.onjuno.com/home/shield.svg" alt="..." />
            <h2>No Credit Checks</h2>
            <p>Opening an account does not affect your credit score</p>
          </li>
          <li>
            <img src="https://cdn.onjuno.com/home/globe.svg" alt="..." />
            <h2>Immigrant Friendly</h2>
            <p>Open an account in under 5 mins with SSN and Passport</p>
          </li>
          <li>
            <img src="https://cdn.onjuno.com/home/smartphone.svg" alt="..." />
            <h2>Contactless</h2>
            <p>Use a virtual card instantly with Apple Pay® and Google Pay®</p>
          </li>
        </ul>
      </div>
      <Part2/>
      <div className="containers">
        <div className="card1 card-frist">
          <img
            src="	https://cdn.onjuno.com/home/bonus-section-image.jpg"
            alt="..."
          />
          <button className="price price1">+$125</button>
          <button className="cost cost1">Bonus Earned</button>
        </div>
        <div className="card2">
          <h1>Earn 1.20% Bonus on Your Checking Account</h1>
          <p>
            You work hard to earn your paycheck, we work harder to make it grow
            faster.
          </p>
          <p>
            <img src="https://cdn.onjuno.com/home/check.svg" alt="..." />
            No Minimum Balance
          </p>
          <p>
            <img src="https://cdn.onjuno.com/home/check.svg" alt="..." />
            No Hidden Fees
          </p>
          <p>
            <img src="https://cdn.onjuno.com/home/check.svg" alt="..." />
            Withdraw Money Anytime
          </p>
          <button>Apply Now</button>
          <h3>Bonus Rate Disclosure</h3>
        </div>
      </div>
      <div className="containers">
        <div className="card3">
          <h1>5% Cashback With Our Premium Metal Card</h1>
          <p>
            Choose 5 brands to earn 5% cashback - be it shopping at Walmart or
            riding with Uber, you decide!
          </p>
          <img
            src="https://cdn.onjuno.com/home/nri-brand-logos.png"
            alt="..."
          />
          <p className="view">
            <button>Apply Now</button>
          </p>
        </div>
        <div className="card1 card-frist">
          <img
            src="https://cdn.onjuno.com/home/cashback-section-with-info-image.jpg"
            alt="..."
          />
          <button className="price price2">+$10.99</button>
          <button className="cost cost2">
            Get Cashback
          </button>
        </div>
      </div>
      <div className="contact">
        <div className="conatct-left">
          <h1>Fill the from</h1>
          <h1>It's easy</h1>
          <div className="contact-info">
            <div>
              <input type="text" placeholder="Frist name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input placeholder="Email" type="text" />
            <textarea type="text" rows="4" placeholder="Briefly tell us about your project and your goals, How can we help you?" ></textarea>
          <button>send message</button>
          </div>
        </div>
        <div className="conatct-right">
          <h3>Need?</h3>
          <h3>presentation?</h3>
          <p>You like what we do, but you need to demonstrate your team as well. Easy! Directly download, print or share the lonk to a PDF with your colleaguese</p>
        </div>
      </div>
    </div>
  );
};

export default Part1;
