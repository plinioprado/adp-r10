import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

export const createfave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', {
      id: faveId,
      faved_on: Date.now()
    });
  })
}

export const deleteFave = (faveId) => {
  realm.write(() => {
    let fave = realm.objects('Fave')
      .filtered('id == $0', faveId);
    realm.delete(fave);
  });
}

export const queryFaves = () => {
  let fave = realm.objects('Fave')
  return fave
}

const realm =  new Realm({schema: [Fave]})
export default realm