function getDate(n) {
    const nowDate = new Date();
    let startDate, endDate;

    endDate = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate();
    let someDaysAgoDate = nowDate;
    someDaysAgoDate.setTime(nowDate.getTime() - 24 * 60 * 60 * 1000 * n);
    startDate = someDaysAgoDate.getFullYear() + '/' + (someDaysAgoDate.getMonth() + 1) + '/' + someDaysAgoDate.getDate();

    console.log(startDate);
    console.log(endDate);
    return { startDate, endDate };
}

getDate(1)