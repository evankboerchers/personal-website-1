import react from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';

function Navbar() {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton>
                    EKB
                </IconButton>
                <Button>
                    <Typography>
                        About Me
                    </Typography>
                </Button>
                <Button>
                    <Typography>
                        Resume
                    </Typography>
                </Button>
                <Button>
                    <Typography>
                        Projects
                    </Typography>
                </Button>
                <Button>
                    <Typography>
                        Contact
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;