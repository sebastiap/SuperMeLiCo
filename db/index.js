import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('orders.db');

export const init = () => {
    const promise = new Promise((resolve,reject) => {
        db.transaction((tx) => {
          //Los DB transaccion tiene 4 parametros :
          //Query
        tx.executeSql(`CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL,total TEXT NOT NULL);`,
         //Parametros del Query
            [],
            //Respuesta Correcta
            () => {resolve()},
            //Respuesta Error
            (_,err) => {reject(err) } 
        )      
        })
    })
    console.log('Se Creo la tabla orders')
    return promise;

}

export const init_items = () => {
    const promise = new Promise((resolve,reject) => {
        db.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS order_item (id INTEGER PRIMARY KEY NOT NULL,order_id INTEGER NOT NULL,product TEXT NOT NULL,quantity TEXT NOT NULL);`,
            [],
            () => {resolve()},
            (_,err) => {reject(err) } 
        )      
        })
    })
    console.log('Se Creo la tabla order_item')
    return promise;

}

export const insertOrder = (
    name,
    total
) => {
    console.log('Intento insertar ' + name + ' :' + total )
    const promise = new Promise((resolve,reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO orders (name, total) VALUES (?,?);',
            [name,total],
            //Se le pasa _ para indicar que no se usara y cuando se completa result es porque se usara ese resultado.
            (_,result) => resolve(result),
            (_,err) => reject(err)     
            )   
        })
    })
    return promise;
}

export const insertOrder_item = (
    order_id,
    product,
    quantity
) => {
    console.log('Intento insertar ' + product + ' ' + quantity )
    const promise = new Promise((resolve,reject) => {
        db.transaction((tx) => {
          //Al hacer los inserts, le agrego un wildcard "?" por cada valor a insertar, se correspondera con los parametros del 2do campo del db.transaction
            tx.executeSql('INSERT INTO order_item (order_id,product, quantity) VALUES (?,?,?);',
            [order_id,product, quantity],
            (_,result) => resolve(result),
            (_,err) => reject(err)     
            )   
        })
    })
    console.log("el fetch es " + fetchOrders().reject)
    return promise;
}


export const fetchOrders = () => {
  console.log("LOG PROBLEMATICO")
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM orders',
          [],
          // (_, result) => {resolve(result); },
          // (_, result) => {resolve(result); console.log("Resultado Fetch " + Array.from(result.rows).map(item => Object.values(item))      )},
        (_, result) => {resolve(result);  console.log("Resultado Fetch Orders " + result.rows.length)},
          (_, error) => {reject(error);  console.log("Resultado Error " + error)},
        )
      })
    })
  }

  export const selectItems = (orderId) => {
    // console.log("ORDER ID " + typeof orderId)
    // if (!(typeof orderId === "string")) {
    //   orderId = 1;
    // };
    // console.log("ORDER ID " + typeof orderId)
    // console.log("ORDER ID " + orderId)
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM order_item where order_id = ?',
          [orderId],
        //   (_, result) => {resolve(result); console.log("Resultado Fetch Items" + Array.from(result.rows).map(item => Object.values(item))      )},
        // (_, result) => {resolve(result);  console.log("Resultado Fetch Items " + result.rows.length)},
        (_, result) => {resolve(result)},
          (_, error) => reject(error),
        )
      })
    })
  }


//   export const deleteOrder = (
// id
// ) => {
//     console.log('Intento deletear ' + id)
//     const promise = new Promise((resolve,reject) => {
//         db.transaction((tx) => {
//             tx.executeSql('DELETE orders WHERE id = ?' ,
//             [id],
//             (_,result) => resolve(result),
//             (_,err) => reject(err)     
//             )   
//         })
//     })
//     console.log("el delete es " + fetchOrders().reject)
//     return promise;
// }


export const truncateTable = (  tabla  ) => {
        if (tabla === "orders" || tabla === "order_item" ) {}
        else {dummy}
        console.log('Intento truncar la tabla ' + tabla )
        const promise = new Promise((resolve,reject) => {
            db.transaction((tx) => {
                // tx.executeSql('SELECT 1 FROM orders' ,
                // tx.executeSql('DROP TABLE order_item' ,
                tx.executeSql('DROP TABLE ' + tabla ,
                [],
                (_,result) => resolve(result),
                (_,err) => reject(err)     
                )   
            })
        })
        return promise;
    }

    export const truncateTable2 = (
      ) => {
          console.log('Intento truncar la tabla ')
          const promise = new Promise((resolve,reject) => {
              db.transaction((tx) => {
                  // tx.executeSql('SELECT 1 FROM orders' ,
                  tx.executeSql('DROP TABLE order_item' ,
                  // tx.executeSql('DROP TABLE orders' ,
                  [],
                  (_,result) => resolve(result),
                  (_,err) => reject(err)     
                  )   
              })
          })
          return promise;
      }