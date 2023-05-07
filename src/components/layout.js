/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import '../styles/global.scss'
import {Link} from "gatsby";

const Layout = ({children}) => {

    return (
        <div className={"layout"}>
            <header>
                <Link to={'/'} aria-label={"home-page"}>
                    <h2>Home page</h2>
                </Link>
            </header>
            <section>
                {children}
            </section>
            <footer>
                <p>copyright</p>
            </footer>
        </div>
    )
}

export default Layout
