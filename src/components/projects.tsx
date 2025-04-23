import Card from '@mui/material/Card';
import { pink } from '@mui/material/colors';
import './projects.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { deepOrange } from "@mui/material/colors";

export default function Projects() {
    return (
        <div className="projects-container">
            <Card 
                className="project-card"
                sx={{
                    minWidth: 245,
                    backgroundColor: pink[200],
                    minHeight: 180,
                    borderRadius: 5,
                    outline: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover .arrow-icon': {
                        right: 15,
                    }
                }}
            >
                <h2>Chat App</h2>
                <ArrowCircleRightIcon 
                    className="arrow-icon"
                    sx={{
                        fontSize: 30,
                        color: 'white',
                        marginTop: 10,
                        position: 'absolute',
                        right: 20,
                        bottom: 10,
                        transition: 'right 0.3s ease',   
                    }} 
                />
            </Card>
            <Card 
                className="project-card"
                sx={{
                    minWidth: 245,
                    backgroundColor: deepOrange[200],
                    minHeight: 180,
                    borderRadius: 5,
                    outline: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover .arrow-icon': {
                        right: 15,
                    }
                }}
            >
                <h2>Photo App</h2>
                <ArrowCircleRightIcon 
                    className="arrow-icon"
                    sx={{
                        fontSize: 30,
                        color: 'white',
                        marginTop: 10,
                        position: 'absolute',
                        right: 20,
                        bottom: 10,
                        transition: 'right 0.3s ease',
                    }} 
                />
            </Card>
        </div>
    );
}
