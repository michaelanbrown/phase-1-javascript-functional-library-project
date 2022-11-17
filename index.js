function myEach(collection, callback) {
    if (Array.isArray(collection) === false) {
        let newCollection =  Object.values(collection)
        newCollection.forEach(callback)
        return collection
    } else if (Array.isArray(collection) === true) {
        let newCollection = [...collection];
        newCollection.forEach(callback)
        return collection
    }
}

function myMap(collection, callback) {
    if (Array.isArray(collection) === false) {
        let newCollection = Object.values(collection);
        return newCollection.map(callback)
    } else if (Array.isArray(collection) === true) {
        return collection.map(callback);
    }
}

function myReduce(collection, callback, acc) {
    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection);
    } else if (Array.isArray(collection) === true) {
        newCollection = [...collection];
    } if (acc) {
        return newCollection.reduce(callback, acc)  
    } else {
        const firstNumber = newCollection[0]
        const array = newCollection.slice(1)
        return array.reduce(callback, firstNumber)
    }
}

function myFind(collection, predicate) {
    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection);
    } else if (Array.isArray(collection) === true) {
        newCollection = collection;
    }
    for (let index in newCollection) {
        if (predicate(newCollection[index]) === true) {
            return newCollection[index]
        }
    }
}

function myFilter(collection, predicate) {
    let finalArray = [];
    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection);
    } else if (Array.isArray(collection) === true) {
        newCollection = collection;
    }
    for (let index in newCollection) {
        if (predicate(newCollection[index]) === true) {
           finalArray.push(newCollection[index]); 
        }
    }
    return finalArray
}

function mySize(collection) {
    let initializer = 0;
    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection);
    } else if (Array.isArray(collection) === true) {
        newCollection = collection;
    }
    for (let index in newCollection) {
        initializer ++
    }
    return initializer
}


function myFirst(array, n) {
    if (n) {
        return array.slice(0, n)
    }
    return array[0]
}

function myLast(array, n) {
    if (n) {
        return array.slice(-n)
    }
    return array[array.length-1]
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}
