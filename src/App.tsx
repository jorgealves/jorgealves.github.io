import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import Home  from './Pages/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}