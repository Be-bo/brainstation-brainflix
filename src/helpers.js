export function getFormattedDate(timestamp){
    let date = new Date(timestamp);

    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const d = date.getDate().toString().padStart(2, "0");
    const y = date.getFullYear();

    return `${m}/${d}/${y}`;
}