import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import esLocale from "@fullcalendar/core/locales/es";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
import listPlugin from "@fullcalendar/list";

function Calendar() {

  return (
    <div className="container mt-3 text-dark">
      <FullCalendar
        locale={esLocale}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,listWeek",
        }}
        dateClick= {(info)=> {
            console.log(info);
            alert('Clicked on: ' + info.dateStr );
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('Current view: ' + info.view.type);
            // change the day's background color just for fun
            info.dayEl.style.backgroundColor = 'red';
          }}
      />
    </div>
  );
}
export default Calendar;