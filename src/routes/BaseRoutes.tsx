import { createBrowserRouter, Outlet, RouterProvider, useLocation, useNavigate } from "react-router-dom";
import { AllBlogs } from "../pages/AllBlogs";
import { Blog } from "../pages/Blog";
import ProtectedRoute from "../components/ProtectedRoute";
import { NotFound } from "../pages/NotFound";
import { Admin } from "../pages/admin/Admin";
import { BlogAdmin } from "../pages/admin/page/BlogAdmin";
import { useRecoilState } from "recoil";
import { globalState } from "../state/global/global.atom";
import { useState } from "react";
import { adminAtom } from "../state/modal/admin.atom";
import Sidebar from "../components/admin/Sidebar";
import styled from "@emotion/styled";
import { ModalLogout } from "../pages/admin/components/ModalLogout";
import { ModalAddBlog } from "../components/admin/ModalAddBlog";
import { DashboardAdmin } from "../pages/admin/page/DashboardAdmin";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { KendaraanAdmin } from "../pages/admin/page/KendaraanAdmin";
import { PoolAdmin } from "../pages/admin/page/PoolAdmin";
import { FuelAdmin } from "../pages/admin/page/FuelAdmin";
import { UserAdmin } from "../pages/admin/page/UserAdmin";
import { VehicleTypeAdmin } from "../pages/admin/page/VehicleTypeAdmin";
import { DeviceAdmin } from "../pages/admin/page/DeviceAdmin";

const Container = styled.div`
    .board-container{
        // display: flex;
    
    }
`

//  Layout Component with Sidebar
const Layout: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState("home")
    const [adminState, setAdminState] = useRecoilState(adminAtom)
    const navigate = useNavigate();
    const location = useLocation();

    const [global, setGlobal] = useRecoilState(globalState);

    return (

        <div style={{ display: 'flex' }}>
            <ModalLogout open={adminState.isModalLogoutShowing} setOpen={() => {
                setAdminState({ ...adminState, isModalLogoutShowing: false })
            }} >

            </ModalLogout>
            {/* 
            <ModalAddBlog open={adminState.isModalAddBlogShowing} setOpen={() => {
                setAdminState({ ...adminState, isModalAddBlogShowing: false })
            }}></ModalAddBlog>
             */}

            {(location.pathname.includes("/admin")) ? <>
                <Sidebar selectedPage={selectedPage} onSelected={(url) => {
                    setSelectedPage(url)
                    navigate(url)
                }} setLogout={() => {
                    setAdminState({ ...adminState, isModalLogoutShowing: true })
                }}></Sidebar>
            </> : <>

            </>}

            <div style={{ flex: 1, padding: '20px' }}>
                <Outlet />
            </div>
        </div>
    );
};

export const BaseRoutes = () => {
    const [global, setGlobal] = useRecoilState(globalState);

    const router = createBrowserRouter(
        [{
            element: <Layout />,
            children: [
                {
                    index: true,
                    path: '/',

                    element: <Home />

                },
                {
                    path: '/blogs',
                    element: <AllBlogs />
                },
                {
                    path: '/blog/:id',
                    element: <Blog />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/admin',
                    element: <ProtectedRoute isAuthenticated={global.token}></ProtectedRoute>,
                    children: [
                        {
                            index: true,
                            path: 'dashboard',
                            element: <DashboardAdmin />
                        },
                        {
                            path: 'blog',
                            element: <BlogAdmin />
                        },
                        {
                            path: 'kendaraan',
                            element: <KendaraanAdmin />
                        },
                        {
                            path: 'pool',
                            element: <PoolAdmin />
                        },
                        {
                            path: 'driver',
                            element: <PoolAdmin />
                        },
                        {
                            path: 'fuel',
                            element: <FuelAdmin />
                        },
                        {
                            path: 'user',
                            element: <UserAdmin />
                        }
                        ,
                        {
                            path: 'vehicle-type',
                            element: <VehicleTypeAdmin />
                        }
                        ,
                        {
                            path: 'device',
                            element: <DeviceAdmin />
                        }
                    ]
                },
                {
                    path: '/*',
                    element: <NotFound />
                }
            ]
        }

        ]
    )

    return (
        <>
            <Container>
                <div className="board-container">

                    {/* <Sidebar selectedPage={selectedPage} onSelected={(url) => {
                        setSelectedPage(url)
                        navigate("/admin/blog")
                    }} setLogout={() => {
                        setAdminState({ ...adminState, isModalLogoutShowing: true })
                    }}></Sidebar> */}

                    <RouterProvider router={router}>

                    </RouterProvider>
                </div>
            </Container>
        </>
    )
}
