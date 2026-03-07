import { useState, useMemo, useEffect } from 'react';

const INITIAL_DB = {}; // Начальное состояние

export const useAttendanceLogic = (globalTeachers, setGlobalTeachers) => {
  const [db, setDb] = useState(() => {
    const saved = localStorage.getItem('ustoz_db');
    return saved ? JSON.parse(saved) : INITIAL_DB;
  });

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Barchasi");

  useEffect(() => {
    localStorage.setItem('ustoz_db', JSON.stringify(db));
  }, [db]);

  const currentData = useMemo(() => {
    let list = db[date] || globalTeachers.map(t => ({
        ...t,
        status: 'Kelmagan',
        hours: t.hours || '0'
    }));

    if (search) {
      list = list.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
    }
    return list;
  }, [db, date, search, globalTeachers]);

  const stats = useMemo(() => {
    const total = currentData.length;
    const count = (s) => currentData.filter(x => x.status === s).length;
    return {
      total,
      kelgan: count('Kelgan'),
      kechikkan: count('Kechikkan'),
      kelmagan: count('Kelmagan'),
      pKelgan: total ? Math.round((count('Kelgan') / total) * 100) : 0,
      pKelmagan: total ? Math.round((count('Kelmagan') / total) * 100) : 0,
    };
  }, [currentData]);

  // ДОБАВЛЕНИЕ
  const addTeacher = (newTeacher) => {
    setGlobalTeachers(prev => [...prev, newTeacher]);
    setDb(prev => ({
      ...prev,
      [date]: [...(prev[date] || []), { ...newTeacher, status: 'Kelgan' }]
    }));
  };

  // РЕДАКТИРОВАНИЕ (Исправляет ошибки в имени или часах)
  const updateTeacher = (updated) => {
    setGlobalTeachers(prev => prev.map(t => t.id === updated.id ? updated : t));
    setDb(prev => ({
      ...prev,
      [date]: (prev[date] || []).map(t => t.id === updated.id ? { ...t, ...updated } : t)
    }));
  };

  // СМЕНА СТАТУСА (Теперь по кругу: Kelgan -> Kechikkan -> Kelmagan)
  const toggleStatus = (id) => {
    const states = ['Kelgan', 'Kechikkan', 'Kelmagan'];
    const updatedList = currentData.map(t => {
      if (t.id === id) {
        const nextIndex = (states.indexOf(t.status) + 1) % states.length;
        return { ...t, status: states[nextIndex] };
      }
      return t;
    });
    setDb(prev => ({ ...prev, [date]: updatedList }));
  };

  return { 
    date, setDate, search, setSearch, filter, setFilter, 
    currentData, stats, addTeacher, toggleStatus, updateTeacher 
  };
};