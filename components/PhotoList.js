import Image from 'next/image';

export const dynamic = 'force-dynamic'

export default function PhotoList() {

  return (
    <div style={{width:'100%',height:'100%'}}>
      <div className="slide" style={{height:'100%'}}> 
        <Image 
          width={1000} 
          height={2000} 
          src="/images/photo1.jpg" 
          alt="1"
          style={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </div>
      <div className="slide" style={{height:'100%'}}> 
        <Image 
          width={1000} 
          height={2000} 
          src="/images/photo2.jpg" 
          alt="1"
          style={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </div>
      <div className="slide" style={{height:'100%'}}> 
        <Image 
          width={1000} 
          height={2000} 
          src="/images/photo3.jpg" 
          alt="1"
          style={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </div>
      <div className="slide" style={{height:'100%'}}> 
        <Image 
          width={1000} 
          height={2000} 
          src="/images/photo4.jpg" 
          alt="1"
          style={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </div>
      <div className="slide" style={{height:'100%'}}> 
        <Image 
          width={1000} 
          height={2000} 
          src="/images/photo5.jpg" 
          alt="1"
          style={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </div>
      <div className="slide" style={{height:'100%'}}> 
        <Image 
          width={1000} 
          height={2000} 
          src="/images/photo6.jpg" 
          alt="1"
          style={{width:'100%',height:'100%',objectFit:'cover'}}
        />
      </div>
        
    </div>
  )
}
