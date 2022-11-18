import React from "react";
import "./Userchildmarriage.css";
function Userchildmarriage() {
  return (
    <div className="marriage-container">
      <div>
        <img
          className="logo1"
          src="https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg"
          alt="notfound"
        />
        <div className="logoline1" />
      </div>

      <div className="marriage-cost">
        <div className="marriage-cost-label">Total Marriage Cost of </div>
        <div className="marriage-cost-left">
          <div style={{ color: "white" }}>
            Present Approximate Cost of Marriage
          </div>
          <div className="marriage-cost-left-line" />
          <div style={{ color: "white" }}>₹ 2,00,000</div>
        </div>
        <div className="marriage-cost-line" />
        <div className="marriage-cost-middle">
          <div style={{ color: "rgb(255, 214, 1)" }}>Inflation Rate</div>
          <div className="marriage-cost-middle-line" />

          <div style={{ color: "rgb(255, 214, 1)" }}>8%</div>
        </div>
        <div className="marriage-cost-line"></div>

        <div className="marriage-cost-right">
          <div style={{ color: "rgb(255, 214, 1)" }}>
            Estimated Future Cost After 10 years
          </div>
          <div className="marriage-cost-right-line" />
          <div style={{ color: "rgb(255, 214, 1)" }}>₹ 2,00,000</div>
          <div />
        </div>
      </div>

      <div className="existing-fund">
        <div className="existing-fund-label">Total Exsiting Fund</div>
        <div className="existing-fund-left">
          <div style={{ color: "white" }}>
            Existing fund availabe + Existing value of Gold & ornamentkept for
            marriage purpose only
          </div>
          <div className="existing-fund-left-line" />
          <div style={{ color: "white" }}>₹ 2,00,000</div>
        </div>
        <div className="existing-fund-line" />
        <div className="existing-fund-middle">
          <div style={{ color: "rgb(255, 214, 1)" }}>Inflation Rate</div>
          <div className="existing-fund-middle-line" />

          <div style={{ color: "rgb(255, 214, 1)" }}>8%</div>
        </div>
        <div className="existing-fund-line"></div>

        <div className="existing-fund-right">
          <div style={{ color: "rgb(255, 214, 1)" }}>
            Estimated Future Cost After 10 years
          </div>
          <div className="existing-fund-right-line" />
          <div style={{ color: "rgb(255, 214, 1)" }}>₹ 2,00,000</div>
          <div />
        </div>
      </div>

      <div className="child-marriage-row1">
        <div className="home-renovation">
          <div className="home-renovation-label">Home Renovation</div>
          <div className="home-renovation-data">₹ 2,00,000</div>
        </div>

        <div className="gold-ornaments">
          <div className="gold-ornaments-label">Gold & Ornaments</div>
          <div className="gold-ornaments-data">₹ 2,00,000</div>
        </div>

        <div className="banquet">
          <div className="banquet-label">Banquet & Decoration</div>
          <div className="banquet-data">₹ 2,00,000</div>
        </div>
      </div>

      <div className="child-marriage-row2">
        <div className="honeymoon-trip">
          <div className="honeymoon-trip-label">Honeymoon Trip</div>
          <div className="honeymoon-trip-data">₹ 2,00,000</div>
        </div>

        <div className="social-trip">
          <div className="social-trip-label">Social Gift</div>
          <div className="social-trip-data">₹ 2,00,000</div>
        </div>

        <div className="photography">
          <div className="photography-label">
            Card Priniting ,video & Photography
          </div>
          <div className="photography-data">₹ 2,00,000</div>
        </div>
      </div>

      <div className="child-marriage-row3">
        <div className="garments">
          <div className="garments-label">Garments</div>
          <div className="garments-data">₹ 2,00,000</div>
        </div>

        <div className="other-expenses">
          <div className="other-expenses-label">Other Expenses</div>
          <div className="other-expenses-data1">
            Ladies Sangeet, Pre Wedding, hotel Rooms etc.
          </div>
          <div className="other-expenses-data2">₹ 2,00,000</div>
        </div>

        <div className="miscellaneous">
          <div className="miscellaneous-label">Any Miscellaneous</div>
          <div className="miscellaneous-data1">Expenses other then above</div>
          <div className="miscellaneous-data2">₹ 2,00,000</div>
        </div>
      </div>
    </div>
  );
}

export default Userchildmarriage;
