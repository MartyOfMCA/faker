import { categoryReturnedAsObject } from "../Components/DateItem/DataItem";

const isDataCached = (label, callbackSize) => sessionStorage.getItem(label)?.split(',').length >= callbackSize;

function * fetchData ({ label, callbacks }) {
    // Obtain the number of iterations to be made for each callback.
    const callbackSize = parseInt(20 / callbacks.length);

    if (isDataCached(label, callbackSize)) {
        for (const cachedData of sessionStorage.getItem(label).split(',')) {
            if (cachedData !== '') {
                yield cachedData;
            }
        }
    } else {
        let dataFetched = 0;

        // Fetch callbackSize of data (if there's no clashes with the cached data)
        for (; dataFetched < callbackSize; dataFetched++) {
            for (const callback of callbacks) {
                yield * fireCallback(label, callback);
            }
        }
    }
}

function * fireCallback(categoryLabel, callback) {
    let callbackResult = getCallbackValue(categoryLabel, callback);
    const cachedData = sessionStorage.getItem(categoryLabel);
    let clashCount = 0;

    // Fetch a new result if the callback has clashed with the cached data.
    while (cachedData?.includes(callbackResult)) {
        clashCount++;
        callbackResult = getCallbackValue(categoryLabel, callback);
        
        
        // End generator if the callback result is not cached.
        if (!cachedData.includes(callbackResult)) {
            break;
        }

        // End generator if the callback has clashed 5 times.
        if (clashCount === 5) {
            return;
        }
    }
    sessionStorage.setItem(categoryLabel, `${cachedData ?? ''}${callbackResult},`);

    yield callbackResult;
}

function getCallbackValue(categoryLabel, callback) {
    let callbackResult = callback();

    if (categoryLabel === categoryReturnedAsObject) {
        callbackResult = callbackResult.name;
    }

    return callbackResult;
}

export default fetchData;