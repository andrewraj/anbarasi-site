/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"
import { RiCopyrightLine } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
      <span className="icon -copyright">
          <RiCopyrightLine />
        </span>{" "}

        <p>Copyright <script>document.write(new Date().getFullYear());</script></p>
        Anbarasi Sinnayah{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
