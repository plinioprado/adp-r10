import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

// export const createfave = (faveId) => {
//   realm.write(() => {
//     realm.create('Fave', {
//       id: faveId,
//       faved_on: Date.now()
//     });
//   })
// }

// export const deleteFave = (faveId) => {
//   realm.write(() => {
//     let fave = realm.objects('Fave')
//       .filtered('id == $0', faveId);
//     realm.delete(fave);
//   });
// }

export const favesQuery = () => {
  let faves = realm.objects('Fave').map(fave => fave);
  return faves
}

export const faveToggle =(id) => {
  let ok = undefined
  realm.write(() => {
    let faves = realm.objects('Fave').filtered('id == $0', id).map(fave => fave)
    if (faves && faves.length) {
      realm.delete(faves[0]);
      ok = false
    } else {
      realm.create('Fave', { id: id, faved_on: new Date() })
      ok =  true
    }
  })
  console.log('ok', ok)
  return ok
}

const realm =  new Realm({schema: [Fave]})
export default realm