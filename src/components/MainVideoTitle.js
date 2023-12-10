const MainVideoTitle = ({title,overview}) => {


  return (
      <div className=" w-screen aspect-video  pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black py-1 px-3 md:py-4 md:px-12 text-lg md:text-xl rounded-lg hover:bg-opacity-80">Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default MainVideoTitle
