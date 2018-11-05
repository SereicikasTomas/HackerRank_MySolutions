function timeConversion(s) {
    let period = s.substring(8, 10);
    let hour = parseInt(s.substring(0,2))
    if ( period == 'PM' && hour == 12 ) {
        let after = s.replace('PM', '');
        return after;
    } else if ( period == 'PM' ) {
        hour += 12;
        let time = s.replace(s.substring(0,2), hour);
        let pm = time.replace('PM', '');
        return pm;
    } else if ( period == 'AM' && hour === 12 ) {
        let before = s.replace('AM', '');
        let zero = before.replace('12', '00');
        return zero;
    } else if ( period == 'AM' ) {
        let am = s.replace('AM', '');
        return am;
    }
}