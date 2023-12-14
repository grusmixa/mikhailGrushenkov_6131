import { Observable } from 'rxjs';

const observable = new Observable(observer => {
    observer.next(5);
    observer.next(4);
    observer.next(3);
    observer.next(2);
    observer.next(1);
    observer.error(error);
    observer.complete();
})

const observer = {
    next: value => alert(value), // 1, 2
    error: error => alert(error), //
    complete: () => alert("completed") // completed
};
observable.subscribe(observer);