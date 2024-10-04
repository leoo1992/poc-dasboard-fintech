import React from "react";
import { useData } from "../Context/DataContext";

function getMonthName(n: number): string {
  const date = new Date();
  const mouth = date.getMonth() + n;
  date.setMonth(mouth);

  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function formatDate(date: Date): string {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

const MonthBtnStyle: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

const MonthBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function setMonth(n: number): void {
    const date = new Date();
    const mouth = date.getMonth() + n;
    date.setMonth(mouth);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button onClick={() => setMonth(n)} style={MonthBtnStyle}>
      {getMonthName(n)}
    </button>
  );
};

export default MonthBtn;
