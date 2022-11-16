import {Navbar} from "./Navbar";
import {Footer} from "./Footer";

export const UserLayout = ({children}) => {
    return(
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}