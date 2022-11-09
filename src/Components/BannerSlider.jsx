import React from "react";
import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel
      variant="dark"
      style={{ maxWidth: "1455px", margin: "auto", }}
    >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/58/SS-Batching-Christmas-Homepage_Banner-EG1180x450_copy_2-060058.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Single's Day Sale</h3>
          <p>Celebrate Single's Day with someone special</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>The Holiday Edit</h3>
          <p>Give 12 gifts in one box in this holday.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>The holiday Shop</h3>
          <p>
            With Something for everyone on your list, reached your desination
            for beauties best gifts.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/17/original-1024-STDCRE-42756-SS-WC-Cyber-Waitlist-Site-Assets-1180x450-040317.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Black Friday</h3>
          <p>
            Signup on our black friday waitlist and be the first to know about
            the sale.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
