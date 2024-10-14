// src/Calendar.js

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (arg) => {
    const title = window.prompt('New Task title');
    if (title) {
      setEvents([...events, { title, start: arg.dateStr, id: Date.now() }]);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Delete task '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
      setEvents(events.filter((event) => event.id !== clickInfo.event.id));
    }
  };

  const handleEventDrop = (info) => {
    const updatedEvents = events.map((event) => {
      if (event.id === info.event.id) {
        return { ...event, start: info.event.start };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <div className="flex">
      {/* Sidebar Calendar */}
      <div className="w-1/4 p-4">
        <h2 className="text-lg font-bold">Select Date</h2>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          dateClick={(arg) => {
            setSelectedDate(arg.date);
            handleDateClick(arg);
          }}
          events={events}
          className="mb-4"
        />
      </div>

      {/* Main Calendar */}
      <div className="w-3/4 p-4">
        <h2 className="text-lg font-bold">Task Calendar</h2>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="timeGridWeek"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventDrop={handleEventDrop}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          }}
          editable
          droppable
          className="bg-white shadow-md rounded-lg"
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
