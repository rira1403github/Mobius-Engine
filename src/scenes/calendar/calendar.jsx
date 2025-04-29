import React from "react";
import "./calendar.css";

const Calendar = () => {
  return (
    <div className="container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Asia%2FKolkata&title=Events&src=dXNleW91cmtub3dsZWRnZTA2QGdtYWlsLmNvbQ&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043"
        style={{ border: 'solid 1px #777'}}
        width={1200}
        height={800}
        title="Calendar"
        frameBorder={0}
        scrolling="yes"
      ></iframe>
    </div>
  );
};

export default Calendar;
