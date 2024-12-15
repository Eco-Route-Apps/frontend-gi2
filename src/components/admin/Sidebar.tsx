import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../../assets/logo.svg'
// import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from '../../common/utils';
import { globalState } from '../../state/global/global.atom';
import { userAtom } from '../../state/user/user.atom';

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: 'grid',
            transition: '0.2s ease',
            '& > *': {
              overflow: 'hidden',
            },
          },
          open ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}


const sidebarItems = [
  {
    path: "/admin/dashboard",
    icon: <Dashboard />,
    label: "Dashboard"
  },
  {
    path: "/admin/blog",
    icon: <Description />,
    label: "Blogs"
  }, {
    path: "/admin/kendaraan",
    icon: <LocalShipping />,
    label: "Kendaraan"
  },
  {
    path: "/admin/driver",
    icon: <Person3 />,
    label: "Driver"
  },
  {
    path: "/admin/pool",
    icon: <LocalParking />,
    label: "Pool"
  }, {
    path: "/admin/vehicle-type",
    icon: <LocalShippingOutlined />,
    label: "Jenis Kendaraan"
  },
  {
    path: "/admin/device",
    icon: <SettingsRemote />,
    label: "DeviceId"
  },
  {
    path: "/admin/fuel",
    icon: <LocalGasStation />,
    label: "Bahan Bakar"
  },
  {
    path: "/admin/user",
    icon: <Person />,
    label: "User"
  },
];


export default function Sidebar({ selectedPage, onSelected, setLogout }) {

  const [user, setUser] = useRecoilState(userAtom)

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 99,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--Primary-Green)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />

      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <img src={Logo} alt="logo" width="40" style={{
          marginRight: "5px"
        }} />
        <Typography level="title-sm">Green Innovation Indonesia</Typography>
        {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
      </Box>
      <Input color='success' size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          {sidebarItems.map((item) => (
            <ListItem onClick={() => {
              onSelected(item.path)
            }}>
              <ListItemButton selected={(selectedPage === item.path) ? true : false}>
                {item.icon}
                <ListItemContent>
                  <Typography level="title-sm">{item.label}</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          ))}
          {/* <ListItem onClick={() => {
            onSelected("home")
          }}>
            <ListItemButton selected={(selectedPage === "home") ? true : false}>
              <HomeRoundedIcon />
              <ListItemContent >
                <Typography level="title-sm">Home</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem onClick={() => {
            onSelected("blogs")
          }}>
            <ListItemButton selected={(selectedPage === "blogs") ? true : false} >
              <DashboardRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Blogs</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem> */}

          {/* <ListItem>
            <ListItemButton
              role="menuitem"
              component="a"
              href="/joy-ui/getting-started/templates/order-dashboard/"
            >
              <ShoppingCartRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Orders</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <AssignmentRoundedIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Tasks</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={[
                      open ? { transform: 'rotate(180deg)' } : { transform: 'none' },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton>All tasks</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Backlog</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>In progress</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Done</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
          <ListItem>
            <ListItemButton
              role="menuitem"
              component="a"
              href="/joy-ui/getting-started/templates/messages/"
            >
              <QuestionAnswerRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Messages</Typography>
              </ListItemContent>
              <Chip size="sm" color="primary" variant="solid">
                4
              </Chip>
            </ListItemButton>
          </ListItem>
          <ListItem nested>
            <Toggler
              defaultExpanded
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <GroupRoundedIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Users</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={[
                      open ? { transform: 'rotate(180deg)' } : { transform: 'none' },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton selected>My profile</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Create a new user</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Roles & permission</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
        </List>
        <List
          size="sm"
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
            '--List-gap': '8px',
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton>
              <SupportRoundedIcon />
              Support
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Settings
            </ListItemButton>
          </ListItem> */}
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', position: "sticky", bottom: 0 }}>
        <Avatar
          variant="outlined"
          size="sm"
          src={(user.profile_picture) ? user.profile_picture : "https://avatars.dicebear.com/api/human/joy-ui.svg"}
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">{user.fullname}</Typography>
          <Typography level="body-xs">{user.email}</Typography>
        </Box>
        <IconButton size="sm" variant="plain" color="neutral" onClick={() => {
          setLogout()
        }
        }>
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}


import styled from "@emotion/styled";
import { Book, CarCrashOutlined, CarCrashRounded, CarRental, CarRentalSharp, Dashboard, Description, DeviceHub, FireTruck, Home, LocalCarWash, LocalGasStation, LocalParking, LocalShipping, LocalShippingOutlined, Login, Person, Person3, Pool, SettingsRemote } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { adminAtom } from "../../state/modal/admin.atom";


// Styled Sidebar Component
const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SidebarItem = styled(Link) <{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  text-decoration: none;
  color: ${props => props.active ? '#1976d2' : 'black'};
  background-color: ${props => props.active ? '#e6f2ff' : 'transparent'};
  border-radius: 5px;
  margin-bottom: 10px;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  svg {
    margin-right: 10px;
  }
`;


// // Sidebar Component
// export const Sidebar: React.FC = () => {
//   const location = useLocation();
//   const [adminState, setAdminState] = useRecoilState(adminAtom);

//   const sidebarItems = [
//     {
//       path: "/admin/blog",
//       icon: <Book />,
//       label: "Blogs"
//     },
//     {
//       path: "/admin/dashboard",
//       icon: <Dashboard />,
//       label: "Dashboard"
//     },
//   ];

//   const handleLogout = () => {
//     setAdminState({ ...adminState, isModalLogoutShowing: true });
//   };

//   return (
//     <SidebarContainer>
//       {sidebarItems.map((item) => (
//         <SidebarItem
//           key={item.path}
//           to={item.path}
//           active={location.pathname === item.path}
//         >
//           {item.icon}
//           {item.label}
//         </SidebarItem>
//       ))}
//       <SidebarItem
//         as="button"
//         onClick={handleLogout}
//         active={false}
//       >
//         Logout
//       </SidebarItem>
//     </SidebarContainer>
//   );
// };
