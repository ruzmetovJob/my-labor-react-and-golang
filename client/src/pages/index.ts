import { lazy } from 'react';

const NotFound = lazyLoader('./NotFound',5000);
const ErrorElement = lazyLoader('./ErrorElement');
const Main = lazyLoader('./Main');
const OAuth = lazyLoader('./OAuth');
const Room = lazyLoader('./Room');
const Services = lazyLoader('./Services');
const Ads = lazyLoader('./Ads');
const Out = lazyLoader('./Out');

const NotFoundLazy = lazy(() => wait(5000).then(()=> import("./NotFound")));

function lazyLoader(path:string,setTimeout:number=0) {
    return lazy(() => wait(setTimeout).then(()=> import(path)))
}

function wait(time: number) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}


export {
    NotFound,
    ErrorElement,
    Main,
    OAuth,
    Out,
    Room,
    Services,
    Ads
}