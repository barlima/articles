import React from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage } from '../pages';
import { NotFoundPage } from '../pages/404';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}