import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../assets/images/logo.png"

const IndexPage = () => {
      return (
  <Layout>
    <SEO title="Home" />
			<div id="wrapper">

					<section id="main" style={{backgroundColor:'rgb(168,143,178)',color:'white'}}>
						<header>
							<span className="avatar">
                <img src={logo} style={{height:'300px'}} alt="" /></span>
							<h1>Camp Nos Collective</h1>
							<p>A collective of artist, beat makers, designers, comics, and creatives</p>
						</header>

						{/* <hr />
						<h2>Extra Stuff!</h2>
						<form method="post" action="#">
							<div class="fields">
								<div class="field">
									<input type="text" name="name" id="name" placeholder="Name" />
								</div>
								<div class="field">
									<input type="email" name="email" id="email" placeholder="Email" />
								</div>
								<div class="field">
									<select name="department" id="department">
										<option value="">Department</option>
										<option value="sales">Sales</option>
										<option value="tech">Tech Support</option>
										<option value="null">/dev/null</option>
									</select>
								</div>
								<div class="field">
									<textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
								</div>
								<div class="field">
									<input type="checkbox" id="human" name="human" /><label for="human">I'm a human</label>
								</div>
								<div class="field">
									<label>But are you a robot?</label>
									<input type="radio" id="robot_yes" name="robot" /><label for="robot_yes">Yes</label>
									<input type="radio" id="robot_no" name="robot" /><label for="robot_no">No</label>
								</div>
							</div>
							<ul class="actions special">
								<li><a href="#" class="button">Get Started</a></li>
							</ul>
						</form>
						<hr /> */}

						<footer>
							<ul className="icons">
								<li><a href="https://twitter.com/CampNos" className="icon brands fa-twitter">Twitter</a></li>
								<li><a href="https://www.instagram.com/campnosmedia/" className="icon brands fa-instagram">Instagram</a></li>
								<li><a href="https://www.youtube.com/channel/UCUMITF9_Ry63dg7dC6v1TyA?sub_confirmation=1" className="icon brands fa-youtube">YouTube</a></li>
							</ul>
						</footer>
					</section>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<ul className="copyright">
							<li>&copy; Camp Nos Collective</li>
						</ul>
					</footer>

			</div>
  </Layout>
)
          }

export default IndexPage
