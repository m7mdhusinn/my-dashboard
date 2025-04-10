import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import CalendarHeader from '../components/CalendarHeader';

export default function CalendarPage() {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([
    { title: 'Design Review', date: '2025-04-02', color: '#FEE2E2' },
    { title: 'Meeting', date: '2025-04-05', color: '#FEF9C3' },
    { title: 'Market Research', date: '2025-04-14', color: '#DCFCE7' },
    { title: 'Discussion', date: '2025-04-09', color: '#E0E7FF' },
    { title: 'New Deals', date: '2025-04-26', color: '#F3E8FF' },
  ]);

  const [calendarView, setCalendarView] = useState('dayGridMonth');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');

  const handleDateClick = (info) => {
    const title = prompt('Enter Event Title:');
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  const handleViewChange = (view) => {
    setCalendarView(view);
    calendarRef.current.getApi().changeView(view);
  };

  const handleToday = () => {
    calendarRef.current.getApi().today();
    setCurrentDate(calendarRef.current.getApi().getDate());
  };

  const handlePrev = () => {
    calendarRef.current.getApi().prev();
    setCurrentDate(calendarRef.current.getApi().getDate());
  };

  const handleNext = () => {
    calendarRef.current.getApi().next();
    setCurrentDate(calendarRef.current.getApi().getDate());
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const handleFilter = () => {
    alert('Filter button clicked!');
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDateChange = (date) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(date);
    setCurrentDate(date);
  };
  return (
    <div className="flex w-full bg-[#FAFBFF] min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <CalendarHeader
          handleViewChange={handleViewChange}
          onToday={handleToday}
          onPrev={handlePrev}
          onNext={handleNext}
          currentDate={currentDate}
          onSearch={handleSearch}
          onFilter={handleFilter}
          onDateChange={handleDateChange}
        />

        <div className="px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={calendarView + currentDate.toISOString()}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={calendarView}
                events={filteredEvents}
                dateClick={handleDateClick}
                headerToolbar={{ left: '', center: '', right: '' }}
                height="auto"
                eventContent={(eventInfo) => (
                  <div
                    className="text-xs px-2 py-1 rounded text-gray-700"
                    style={{ backgroundColor: eventInfo.event.extendedProps.color }}
                  >
                    <strong>{eventInfo.event.title}</strong>
                  </div>
                )}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
