import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PolicyIcon from '@mui/icons-material/Policy';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LinkIcon from '@mui/icons-material/Link';
import ArticleIcon from '@mui/icons-material/Article';

export default function TemporaryDrawer({color}) {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const anchorIcons = {
        'Início': <HomeIcon />,
        'Services': <ArticleIcon />,
        'Legislação': <PolicyIcon />,
        'Links úteis': <LinkIcon />,
        'Transparência': <ManageSearchIcon />,
        'Privacidade': <HistoryEduIcon />,
        'Fale conosco': <HelpCenterIcon />,
    }
    const anchorHref = {
        'Início': '/',
        'Serviços': '/features',
        'Legislação': '/legislation',
        'Links úteis': '/links',
        'Transparência': '/transparence',
        'Privacidade': '/privacy',
        'Fale conosco': '/contact',
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "16rem" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            
        >

            <List>
                {['Início', 'Serviços', 'Legislação', 'Links úteis', 'Transparência', 'Privacidade', 'Fale conosco'].map((text, index) => (
                    <Box key={text}>
                        <ListItemButton  component='a' href={anchorHref[text]}>
                            <ListItemIcon>
                                {anchorIcons[text]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                        {index < 2 && <Divider /> }
                        {index == 3 && <Divider /> }
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <React.Fragment key={'right'}>
            <Button onClick={toggleDrawer('right', true)}>
                <MenuIcon sx={{
                    color: {color},
                    fontSize: "2rem",
                }} />
            </Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </React.Fragment>
    );
}
