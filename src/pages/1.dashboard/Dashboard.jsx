import React from "react";
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="body-div">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tugas Individu 3 - Pemrograman Web Lanjut</h1>
          </div>
        </header>
        <p className="mx-10 py-10 lg:px-8">
          Tugas Individu 3 ini diberikan kepada Mahasiswa Institut Teknologi Sumatera Semester 7 yang mengambil Mata Kuliah Pemrograman Web Lanjut.
          <br></br>Tugas ini diberikan supaya Mahasiswa dapat memahami pembuatan web sederhana menggunakan ReactJS.
        </p>
    </div>
  )
}

export default Dashboard