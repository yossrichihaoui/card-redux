import { ADDMOVIE, DELETEMOVIE } from "./actiontype"

export const add =(data)=>{
return{ 
    type:ADDMOVIE,
    payload:data
  }
}
export const del =(id)=>{
    return{ 
        type:DELETEMOVIE,
        payload:id
      }
}

