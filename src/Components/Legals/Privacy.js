import { Panel } from "rsuite";
import Legals from "./Legals";

export default function Privacy() {
	return (
		<Legals>
			<h2 style={{ textAlign: "center", paddingBottom: "20px" }}>Privacy Policy</h2>
			<Panel bordered>
				<p>Last Updated: September 02, 2023</p>
				<h3>Introduction</h3>
				<p>
					Thank you for visiting my portfolio website, located at https://milesbreman.com/. This Privacy Policy outlines my
					commitment to respecting your privacy. As the site doesn't collect any personal information or use cookies, this is
					a simple policy designed to explain that fact.
				</p>
				<h3>Personal Information</h3>
				<p>
					I do not collect any personal information on this website. Visitors are free to navigate the site without providing
					any personally identifiable information.
				</p>
				<h3>Cookies and Tracking</h3>
				<p>This website does not use cookies or any other tracking technologies to collect information from visitors.</p>
				<h3>Third-Party Links</h3>
				<p>
					This portfolio website may contain links to third-party websites for the purpose of showcasing my work, referencing
					material, or for other informational purposes. I am not responsible for the privacy practices or the content of
					these third-party sites. Please review the privacy policies of any third-party sites you visit through links on
					this website.
				</p>
				<h3>Security</h3>
				<p>
					While no data collection or storage is involved with the use of this site, I take reasonable measures to protect
					the integrity of the website and its content.
				</p>
				<h3>Changes to This Policy</h3>
				<p>
					I reserve the right to make changes to this Privacy Policy at any time. Any changes will be updated on this page
					and the last updated date will be revised. Please review this policy periodically to stay informed.
				</p>
				<h3>Contact Information</h3>
				<p>
					If you have any questions or concerns about this Privacy Policy, please feel free to contact me at
					milesbreman@gmail.com.
				</p>
			</Panel>
		</Legals>
	);
}
