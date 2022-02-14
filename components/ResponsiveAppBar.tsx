import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import styles from '../styles/ResponsiveAppBar.module.css'
import { Divider } from '@mui/material'
import Link from 'next/link'

const pages_with_links: { [key: string]: string } = {
  "Home" : '/',
  "Projects": '/projects',
  "About": '/about',
}

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar color="inherit" position="static" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Image className={styles.rounded_logo} src="/images/logo.jpg" alt="a2krocks' logo" width={30} height={30} />
              <Box sx={{ pl: 1 }} >a2krocks</Box>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {
                  Object.keys(pages_with_links).map((page, index) => (
                    <Link key={page} href={pages_with_links[page]}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography color="inherit" textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  ))
                }

              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Image className={styles.rounded_logo} src="/images/logo.jpg" alt="a2kroks' logo" width={30} height={30} />
              <Box sx={{ pl: 1 }} >a2krocks</Box>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {
                Object.keys(pages_with_links).map((page, index) => (
                  <Link  key={page} href={pages_with_links[page]}>
                    <Button
                      color="inherit"
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, display: 'block' }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))
              }
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
    </div>
  );
};
export default ResponsiveAppBar;
