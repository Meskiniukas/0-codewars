function maxBall(v0) {
    const g = 9.81;
    const v = v0 * 1000 / 3600     // v0 = km/h; v = m/s.
    let h0 = 0;
    let h = 0;
    let t0 = 0;
    
    for (let t = t0; t < 100000; t + 0.1) {
        t += 0.1;
        h = v * t - 0.5 * g * t * t
        if (h > h0) {
            h0 = h;
            t0 = t;
            } else {
                console.log(`${Math.round(v0)} km/h; ${Math.round(h0)} m; ${Math.round(t0)} s.`);
                return Math.round(t0 * 10);
                break;
                }
        }
}

console.log(`${maxBall(99)} sek/10`);