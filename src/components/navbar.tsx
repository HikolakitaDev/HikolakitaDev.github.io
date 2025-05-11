
import './navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function ResponsiveAppBar() {
  return (
    <div className="nav-container">
      <div className="main-nav">
        <div className="icon-wrapper" id="home-icon-wrapper"> 
          <HomeIcon sx={{ fontSize: 27, color: "black" }} />
        </div>
        <div className="icon-wrapper" id="folder-icon-wrapper">
          <FolderIcon sx={{ fontSize: 27, color: "black" }} />
        </div>
        <div className="icon-wrapper" id="build-icon-wrapper">
          <BuildIcon sx={{ fontSize: 27, color: "black" }} />
        </div>
        <div className="icon-wrapper" id="emoji-events-icon-wrapper">
          <EmojiEventsIcon sx={{ fontSize: 27, color: "black" }} />
        </div>
        <div className="icon-wrapper" id="contact-page-icon-wrapper">
          <ContactPageIcon sx={{ fontSize: 27, color: "black" }} />
        </div>
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
