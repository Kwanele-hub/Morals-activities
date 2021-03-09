import React from 'react'
import { Link } from 'react-router-dom';





function Paypal() {

    
    return (
        <div>

<section >
<div class="price">
        <h2>Transaction!</h2>
    </div>
    <div class="card__container">
        <div class="card">
            <div class="row paypal">
                <div class="left">
                    <input id="pp" type="radio" name="payment" />
                    <div class="radio"></div>
                    <label for="pp">Paypal</label>
                </div>
            </div>
            <div class="row credit">
                <div class="left">
                    <input id="cd" type="radio" name="payment" />
                    <label for="cd">Debit/ Credit Card</label>
                    <div class="radio"></div>
                </div>
            </div>
            <div class="row cardholder">
                <div class="info">
                    <label for="cardholdername">Name</label>
                    <input  id="cardholdername" type="text" />
                </div>
            </div>
            <div class="row number">
                <div class="info">
                    <label for="cardnumber">Card number</label>
                    <input id="cardnumber" type="number" pattern="[0-9]{16,19}" maxlength="13" />
                </div>
            </div>
            <div class="row details">
                <div class="left">
                   
                   
                     
                </div>
                <div class="right">
                    <label for="cvv">CVC/CVV</label>
                    <input type="number" maxlength="4" placeholder="123"/>
                    <span data-balloon-length="medium" data-balloon="The 3 or 4-digit number on the back of your card." data-balloon-pos="up"></span>
                </div>
                <label for="expiry-date">Expiry</label>
                    <select id="expiry-date">
                        <option>MM</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                <select id="expiry-date">
                        <option>YYYY</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                    </select>
                    
            </div>
        </div>
    </div>
    <div class="button">
        <Link to="/main">
        <button type="submit"><i></i> Confirm and Pay</button>
        </Link>
        
    </div>
</section>
    
</div>
    )
}

export default Paypal;
