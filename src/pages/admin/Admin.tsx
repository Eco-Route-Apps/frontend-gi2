import styled from "@emotion/styled"
import Sidebar from "../../components/admin/Sidebar"
import { AdminTable } from "../../components/admin/Table"
import { useState } from "react"
import { DashboardAdmin } from "./page/DashboardAdmin"
import { BlogAdmin } from "./page/BlogAdmin"
import { useRecoilState, useRecoilValue } from "recoil"
import { adminAtom } from "../../state/modal/admin.atom"
import { ModalAddBlog } from "../../components/admin/ModalAddBlog"
import { ModalLogout } from "./components/ModalLogout"

const Container = styled.div`
    .board-container{
        display: flex;
    
    }
`
export const Admin: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState("home")
    const [adminState, setAdminState] = useRecoilState(adminAtom)

    return (
        <Container>



            <div className="board-container">

                <div style={{
                    margin: "26px"
                }}>

                    {(selectedPage == "home") ? <><DashboardAdmin /></> :
                        (selectedPage == "blogs") ? <BlogAdmin /> : null}

                </div>
            </div>


        </Container>
    )
} 