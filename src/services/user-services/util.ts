
export const notFound  = (status: number,msg:string) =>{
  return Promise.reject({ status, msg });
}