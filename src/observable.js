var { Observable } = require('rxjs');

function GetObservable() {

    const observable = new Observable(suscriptor => {

        setTimeout(() => {
            suscriptor.next({ id: 1, desc: 'Hola' });
        }, 2000);

        setTimeout(() => {
            suscriptor.next('Evento 2 desde el observable');
            suscriptor.complete();
        }, 3000);

    });

    return observable;
}

async function IniciarObservableAsync() {
    let cont = 1;
    return new Promise((resolve, reject) => {
        const observable$ = Observable.create((subject) => {

            console.log('Dentro del callback del observable');

            // Cada 1 segundo emite un evento al observable
            const intervalo = setInterval(() => {
                subject.next('evento ' + cont++);
            }, 1000);

            // A los 5 segundos detiene el intervalo que 
            // emite los eventos del observable
            setTimeout(() => clearInterval(intervalo), 5000);
        });

        const suscriptor = observable$.subscribe((obs) => {
            console.log(`Suscriptor recibió ${obs}`);
        });

        // A los 6 segundos se desuscribe del observable
        setTimeout(() => {
            suscriptor.unsubscribe();
            resolve();
        }, 6000);
    });
}

module.exports = { GetObservable, IniciarObservableAsync }