interface Props{
  isActive: boolean
}

const TestsCard = ({isActive}:Props) => {
  return (
    <div className={`card w-96 bg-base-100 shadow-xl my-4 ${isActive && 'border border-red-500'}`} >
      <div className='card-body'>
        <h2 className='card-title'>Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default TestsCard