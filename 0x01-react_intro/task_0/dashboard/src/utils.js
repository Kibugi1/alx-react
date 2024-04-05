export function getFullYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return currentYear;
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
      return "Holberton School";
} else {
    return "Holberton School main dashboard";
}
}
