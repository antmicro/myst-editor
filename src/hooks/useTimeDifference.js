import { useComputed, useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

const formatter = new Intl.RelativeTimeFormat("en", { style: "long" });

export const useTimeDifference = (timestamp) => {
  const difference = useSignal({ amount: 0, unit: "second" });
  const timeText = useComputed(() => formatter.format(-difference.value.amount, difference.value.unit));
  const timer = useRef(null);

  function setTimeDifference() {
    const secondDifference = Math.floor((Date.now() - timestamp) / 1000);
    const minuteDifference = Math.floor(secondDifference / 60);
    const hourDifference = Math.floor(minuteDifference / 60);
    const dayDifference = Math.floor(hourDifference / 24);
    const monthDifference = Math.floor(dayDifference / 30);
    const yearDifference = Math.floor(monthDifference / 12);

    if (minuteDifference >= 60) {
      clearInterval(timer.current);
    }

    if (secondDifference < 60) {
      difference.value = { amount: secondDifference, unit: "second" };
    } else if (minuteDifference < 60) {
      difference.value = { amount: minuteDifference, unit: "minute" };
    } else if (hourDifference < 24) {
      difference.value = { amount: hourDifference, unit: "hour" };
    } else if (dayDifference < 30) {
      difference.value = { amount: dayDifference, unit: "day" };
    } else if (monthDifference < 12) {
      difference.value = { amount: monthDifference, unit: "month" };
    } else {
      difference.value = { amount: yearDifference, unit: "year" };
    }
  }

  useEffect(() => {
    setTimeDifference();
    timer.current = setInterval(setTimeDifference, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return timeText;
};
