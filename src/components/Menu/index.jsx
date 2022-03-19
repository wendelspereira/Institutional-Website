import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styles from "./styles.module.scss"

export default function HeaderMenu({ config }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const { name, label, customOnClick, items } = config

  const handleClick = (event, customOnClick) => {
    customOnClick()
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (customOnClick) => {
    customOnClick()
    setAnchorEl(null)
  }

  const customStyle = {
    color: "var(--text-secondary)",
    borderRadius: "0",
    borderBottom: "solid 2px transparent",
    fontFamily: "Inter",
    "&:hover": {
      background: "none",
      borderBottom: "solid 2px var(--brand-tertiary)"
    }
  }

  return (
    <div className={styles.container}>
      <Button
        id={`${name}-button`}
        aria-controls={open ? `${name}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event) => handleClick(event, customOnClick)}
        sx={{ ...customStyle }}
      >
        {label}
      </Button>

      {items.length > 0 && <Menu
        id={`${name}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map((item, index) => {
          const { label, customOnClick } = item
          return (
            <MenuItem
              key={index}
              onClick={() => handleClose(customOnClick)}
            >
              {label}
            </MenuItem>
          )
        })}
      </Menu>}
    </div>
  )
}
