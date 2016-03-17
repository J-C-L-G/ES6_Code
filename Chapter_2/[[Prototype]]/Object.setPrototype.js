/**
 * Created by JCLG on 3/16/2016.
 */

var obj1 = {
    name : 'obj 1',
    execute(){
        console.log('now executing... ' + this.name );
    }
};

var obj2 = {
    name : 'obj 2'
};

Object.setPrototypeOf(obj2, obj1);
obj2.execute();