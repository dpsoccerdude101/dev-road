import { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import * as dayjs from "dayjs";
import * as weekday from "dayjs/plugin/weekday"
import * as weekOfYear from "dayjs/plugin/weekOfYear"
import styles from "./calendar.module.css";

import styled from "styled-components";

const Padding = styled.div`
  max-width: 70vw;
  min-height: 30vh;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
`
dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const createMonthDays = (year, month, num) => [...Array(num)].map((day, index) => {
    return {
      date: dayjs(`${year}-${month+1}-${index + 1}`).format("YYYY-MM-DD"),
      dayOfMonth: index + 1,
      isCurrentMonth: true,
      weekday: getWeekday(`${year}-${month+1}-${index + 1}`)
    };
  });

  const createDaysForPreviousMonth = (year, month, firstday) => {
    const prev = dayjs(`${year}-${month+1}-01`).subtract(1, "month");
    const days = createMonthDays(prev.year(), prev.month(), prev.daysInMonth());
    return days.slice(-firstday || days.length).map((d, index) => {
        return {
          date: d.date,
          dayOfMonth: d.dayOfMonth,
          isCurrentMonth: false,
          weekday: getWeekday(`${prev.year()}-${prev.month()}-${index + 1}`)
        }
    });
  }

const createDaysForNextMonth = (year, month, lastday) => {
  const next = dayjs(`${year}-${month}-01`).add(1, "month")
  const days = createMonthDays(next.year(), next.month(), next.daysInMonth())
  return days.slice(0, 6 - lastday).map((d, index) => {
    return {
      date: d.date,
      dayOfMonth: d.dayOfMonth,
      isCurrentMonth: false,
      weekday: getWeekday(`${next.year()}-${next.month()}-${index + 1}`)
    };
  });
}

function getWeekday(date) {
  return dayjs(date).weekday();
}

const createDaysArray = (date) => {
  let cdate = dayjs(date)
  let month = cdate.month()
  let year = cdate.year()
  // console.log('date', cdate.format('MMMM YYYY'), 'numDays', dayjs(date).daysInMonth())
  let days = createMonthDays(year, month, cdate.daysInMonth());
  let firstDay = days[0].weekday
  let lastDay = days[days.length - 1].weekday
  return [
    ...createDaysForPreviousMonth(year, month, firstDay), 
    ...days, 
    ...createDaysForNextMonth(year, month, lastDay)
  ]
}

  // https://www.iandevlin.com/blog/2015/07/html5/building-a-semantic-calendar-in-html5/
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const NOW = dayjs()
const INITIAL_DAYS = createDaysArray(NOW)

const Calendar = (props) => {
    const [days, setDays] = useState(INITIAL_DAYS)
    const [selectedDate, setSelectedDate] = useState(NOW)

    const panMonth = (op) => {
      if(op) {
        setSelectedDate(state => dayjs(state)[op](1, "month"))
      } else {
        setSelectedDate(NOW)
      }
    }

    useEffect(() => {
      setDays(createDaysArray(selectedDate))
    }, [selectedDate])

// TODO:
// Add click to open event page for the date.
// designs for that page could be: https://codepen.io/davidkpiano/pen/xwyVXO or https://codepen.io/peanav/pen/ulkof

    return (
        <Layout>
            <div className={styles.calendar_month}>
                <section className={styles.calendar_month_header}>
                    <div className={styles.calendar_month_header_selected_month}>
                        {selectedDate.format("MMMM YYYY")}
                    </div>
                    <section className={styles.calendar_month_header_selectors}>
                        <button onClick={() => panMonth('subtract')}> ← </button>
                        <button onClick={() => panMonth()}>Today</button>
                        <button onClick={() => panMonth('add')}> → </button>
                    </section>
                </section>

                <ol className={styles.day_of_week + ' ' + styles.olist}>
                    {WEEKDAYS.map(d => <li key={d}>{d}</li>)}
                </ol>

                <ol className={styles.days_grid + ' ' + styles.olist}>
                  {days.map((d, index) => (
                    <li key={index}
                    className={[
                      styles.calendar_day,
                      styles.litem,
                      !d.isCurrentMonth && styles.calendar_day_not_current,
                      d.date === NOW.format("YYYY-MM-DD") && styles.calendar_day_today
                    ].join(' ')}>
                      <time datetime={d.date}>{d.dayOfMonth}</time> 
                    </li>
                  ))}
                </ol>
            </div>
        </Layout>
    )
  }

  export default Calendar
