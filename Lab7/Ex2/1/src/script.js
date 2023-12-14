import { of, from, Observable, range, interval } from 'rxjs';
import { scan, filter } from 'rxjs/operators';

const stream$ = range(1, 100);

stream$
    .pipe(
        filter(val => {
            if (val < 2) return false;
            if (val === 2) return true;
            let limit = Math.sqrt(val);           
            let i = 2;
            while (i <= limit) {
                if (val % i === 0) return false;
                i += 1;
            }
            return true;
        }),
        scan((acc, val) => acc.concat(val), [])
    )
    .subscribe(acc => {if (acc.length === 25) console.log(acc)});