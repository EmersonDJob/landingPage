import "./Topbar.scss"
import { Person, Mail } from '@mui/icons-material';


export default function Topbar() {
    return (
        <div className="topbar active">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">EmersonDLL</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+67 99946 8759</span>

                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>emersondinizleme@gmail.com
                        </span>

                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
