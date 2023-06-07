export const formatRangeDate = (dateFrom: string, dateTo = "Present") => {
  if (dateFrom === "" || (dateFrom === "" && dateTo === "Present")) return "";

  return `(${new Date(dateFrom).toLocaleString("en-US", {
    month: "short",
  })} ${new Date(dateFrom).getFullYear()}) - ${
    dateTo === "Present"
      ? dateTo
      : `(${new Date(dateTo).toLocaleString("en-US", {
          month: "short",
        })} ${dateTo === "Present" ? dateTo : new Date(dateTo).getFullYear()})`
  }`;
};
