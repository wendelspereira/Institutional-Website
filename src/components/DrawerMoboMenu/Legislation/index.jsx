import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';

export default function TemporaryDrawer({ items, setState }) {
    const [state, _setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        _setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "16rem" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {items.map((item, index) => (
                    <Box key={index} onClick={()=>{setState(item)}}>
                        <ListItemButton component='button'>
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                        {/* <Divider /> */}
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <React.Fragment key={'top'}>
            <Button onClick={toggleDrawer('top', true)}>
                <ExpandMoreIcon sx={{
                    color: "var(--text-primary)",
                    fontSize: "2rem",
                }} />
            </Button>
            <Drawer
                anchor={'top'}
                open={state['top']}
                onClose={toggleDrawer('top', false)}
            >
                {list('top')}
            </Drawer>
        </React.Fragment>
    );
}
