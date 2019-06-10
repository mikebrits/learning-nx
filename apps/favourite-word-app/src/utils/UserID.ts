import nanoid from 'nanoid';

export const getUserId = async () : Promise<string> => {
   const id = await localStorage.getItem('id');
   if(!id){
     const newId = nanoid();
     await localStorage.setItem('id', newId);
     return newId;
   }
   return id;
};
