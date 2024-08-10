import WeatherIcon from "./WeatherIcon";

function DailyForecastWidget({ data }) {
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  weather_date.day =
    now_date.day === weather_date.day ? "Today" : weather_date.day;

  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className="temperature">
          <div className="max">{temperature_max} °C</div>
          <div className="min">{temperature_min} °C</div>
        </div>
      </div>
      <div className="precipitation">{precipitation.total} mm/h</div>
    </div>
  );
}

export default DailyForecastWidget;
