import React, { createContext, useContext, useState, useEffect } from "react";

// Membuat context baru
export const SelectedMonthContext = createContext();

// Hook untuk menggunakan context
export const useSelectedMonth = () => useContext(SelectedMonthContext);

// Provider untuk menyimpan data bulan yang dipilih
export const SelectedMonthProvider = ({ children }) => {
  // Fungsi untuk mendapatkan nama bulan saat ini
  const getCurrentMonth = () => {
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    return months[currentMonthIndex];
  };

  // Fungsi untuk mengonversi nama bulan menjadi nilai yang sesuai
  const convertMonthToValue = (monthName) => {
    const monthMap = {
      Januari: '01',
      Februari: '02',
      Maret: '03',
      April: '04',
      Mei: '05',
      Juni: '06',
      Juli: '07',
      Agustus: '08',
      September: '09',
      Oktober: '10',
      November: '11',
      Desember: '12',
    };
    return monthMap[monthName];
  };

  // State untuk menyimpan data bulan yang dipilih
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const [selectedMonth, setSelectedMonth] = useState(convertMonthToValue(getCurrentMonth()));
  const [selectedMonthName, setSelectedMonthName] = useState();
  // State untuk menyimpan data tahun yang dipilih
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());


  // Fungsi untuk menangani pemilihan tahun
  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  // Set nilai default untuk selectedMonthName menggunakan useEffect
  useEffect(() => {
    setSelectedMonthName(getCurrentMonth());
  }, []);

  // Fungsi untuk menangani pemilihan bulan
  const handleMonthSelect = (monthName) => {
    const monthValue = convertMonthToValue(monthName);
    setSelectedMonthName(monthName)
    setSelectedMonth(monthValue);
  };

  // Membuat object value untuk context
  const value = {
    selectedMonth,
    handleMonthSelect,
    selectedMonthName,
    selectedYear,
    handleYearSelect
  };

  // Memberikan context kepada turunan
  return (
    <SelectedMonthContext.Provider value={value}>
      {children}
    </SelectedMonthContext.Provider>
  );
};
