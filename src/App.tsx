import homa from '/images/anomalihoma.png'

const App = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-black'>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-6 p-4 grid-cols-1'>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className='flex justify-center'
          >
            <img
              src={homa}
              alt={`Homa Image ${index + 1}`}
              className='object-cover w-96 h-96 rounded-lg shadow-lg'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
