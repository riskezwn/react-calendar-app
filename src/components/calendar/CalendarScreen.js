import { messages } from "../../helpers/calendar-messages-es";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import "moment/locale/es";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Navbar } from "../ui/Navbar";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { uiOpenModal } from "../../actions/ui";
import {
  eventClearActive,
  eventSetActive,
  eventStartLoading,
} from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteFab } from "../ui/DeleteFab";

moment.locale("es");

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((store) => store.calendar);
  const { uid } = useSelector((store) => store.auth);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  };
  const onSelect = (e) => {
    dispatch(eventSetActive(e));
  };
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };
  const onSelectedSlot = (e) => {
    dispatch(eventClearActive());
  };

  const eventStyleGenerator = (event, start, end, isSelected) => {
    let color = null;
    if (uid === event.user._id) {
      color = isSelected ? "#0052c4" : "#0d6efd";
    } else {
      color = isSelected ? "#444444" : "#5d5d5d";
    }
    const style = {
      backgroundColor: color,
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };
    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGenerator}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
        onSelectSlot={onSelectedSlot}
        selectable={true}
        selected={activeEvent}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
      <AddNewFab />
      {activeEvent && <DeleteFab />}
    </div>
  );
};
