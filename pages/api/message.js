import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function messageAPI(req, res) {
  const db = (await connectDB).db('invitation');
  let session = await getServerSession(req, res, authOptions)

  if(session){
    req.body.author = session.user.email
    req.body.userName = session.user.name
    req.body.userObjectId = session.user._id
  }else{
    return res.status(400).json('로그인 후 입력해주세요.')
  }

  switch (req.method){
    case 'GET' : 
      return res.status(200).json(await db.collection('message').find().toArray())
    case 'POST' : 
      let postParams = {
        userName : req.body.userName,
        contents : req.body.contents,
        author : req.body.author
      }

      if(postParams.contents == ''){
        return res.status(500).json('메세지를 입력해주세요.')
      }
      
      try{
        await db.collection('message').insertOne(postParams)
        return res.status(200).json('등록되었습니다.')
      }catch (error) {
        return res.status(400).json('잠시후 다시 시도해주세요.')
      }
    case 'DELETE' : 
      let deleteParams = {
        _id : req.body._id,
      }

      let checkResult = await db.collection('message').findOne(deleteParams)

      if(checkResult.author != session.user.email){
        return res.status(500).json('현재 유저와 작성자 불일치')
      }else{
        let result = await db.collection('message').deleteOne(deleteParams)

        if(result.deletedCount != 0){
          return res.status(200).json('삭제하였습니다.')
        }
      }
    default :
      return res.status(200).json('처리완료함')
  }
}
  