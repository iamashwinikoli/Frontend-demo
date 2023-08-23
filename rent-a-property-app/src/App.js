import React from "react";
//import house from "./images/house.png";
import "./style.css";

const RentProperty = () => {
  return (
    <div>
      <section>
        <nav>
          <img class="logo" src="./Images/house.png" alt="logo" />
          <a href="home">Home</a>
          <a href="rent">Rent</a>
          <a href="buy">Buy</a>
          <a href="sell">Sell</a>
          <a href="contact">Contact</a>
          <button class="btn" type="button">
            Sign-up
          </button>
          <button class="btn1" type="button">
            Login
          </button>
        </nav>
        <h1>Aarya's Rent Property</h1>
        <h4>Search properties to rent</h4>
        <form>
          <input type="text" placeholder="Search" />
          <button class="btn2" type="submit">
            Search
          </button>
        </form>
      </section>
      <h2>Property for Rents</h2>
      <div class="property-box">
        <div>
          <figure>
            <img class="img-box" src="./Images/house-1.webp" alt="myimage" />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./Images/house-3362676_1280.jpg"
              alt="myimage"
            />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img class="img-box" src="./Images/house-3.jpg" alt="myimage" />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img class="img-box" src="./Images/house-4.jpg" alt="myimage" />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./Images/house-186400_1280.jpg"
              alt="myimage"
            />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img class="img-box" src="./images/house-a.jpg" alt="myimage" />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img class="img-box" src="./images/house.jpg" alt="myimage" />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./images/pexels-photo-2566860.jpeg"
              alt="myimage"
            />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./images/pexels-photo-2587054.jpeg"
              alt="myimage"
            />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./images/san-francisco-210230_1280.jpg"
              alt="myimage"
            />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./images/vw-beetle-405876_1280.jpg"
              alt="myimage"
            />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
        <div>
          <figure>
            <img class="img-box" src="./images/new-home-5.jpg" alt="myimage" />
            <h3>$2,095 /month</h3>
            <p>Bedrooms: 3, kitchen: 1</p>
            <p>Houce Architecture, New York</p>
            <label>
              Property Type:
              <select>
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </label>
          </figure>
        </div>
      </div>
      <h2>Interior Design</h2>
      <div class="property-box">
        <div>
          <figure>
            <img class="img-box" src="./Images/bedroom-7.jpg" alt="myimage" />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./Images/brick-wall-1850095_1280.jpg"
              alt="myimage"
            />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./Images/furniture-998265_1280.jpg"
              alt="myimage"
            />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img class="img-box" src="./Images/Interior-1.jpg" alt="myimage" />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img class="img-box" src="./Images/interior-3.jpg" alt="myimage" />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./Images/interior-2400372_1280.jpg"
              alt="myimage"
            />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img class="img-box" src="./Images/kitchen-8.jpg" alt="myimage" />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img class="img-box" src="./Images/kitchen-10.jpg" alt="myimage" />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./Images/kitchen-1940174_1280.jpg"
              alt="myimage"
            />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./Images/kitchen-interior.webp"
              alt="myimage"
            />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./Images/lights-1867437_1280.jpg"
              alt="myimage"
            />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
        <div>
          <figure>
            <img
              class="img-box"
              src="./Images/living-room-6.jpg"
              alt="myimage"
            />
            <h3>Interior Holl design</h3>
            <p>Houce Architecture, New York</p>
          </figure>
        </div>
      </div>
      <footer>
        <p>
          <b>&copy; 2023 Aarya's Property</b>
        </p>
      </footer>
    </div>
  );
};

export default RentProperty;
