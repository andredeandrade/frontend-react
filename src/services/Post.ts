import Api from './Api'

const token = process.env.REACT_APP_API_TOKEN

export interface IPost {
  id: number
  title: string,
  body: string
}

export const list = (page:number) => {
  return Api.get(`posts?access-token=${token}&page=${page}`)
}