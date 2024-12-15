import './App.css'
import { RouterProvider, useNavigate } from 'react-router-dom'
import { BaseRoutes } from './routes/BaseRoutes'
import { globalState } from './state/global/global.atom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { adminAtom } from './state/modal/admin.atom';

function App() {


  return (
    <>

      <BaseRoutes></BaseRoutes>
    </>
  )
}

export default App
