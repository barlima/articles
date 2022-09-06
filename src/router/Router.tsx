import React from 'react'
import { Route, Routes } from "react-router-dom";
import { MainLayout } from '../components/layouts/MainLayout';
import { HomePage } from '../pages';
import { NotFoundPage } from '../pages/404';

export const Router: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  )
}