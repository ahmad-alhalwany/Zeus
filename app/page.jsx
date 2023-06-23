import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden"/>
        <span className="green_gradient text-center"> AI-Powered Prompts </span>
      
      </h1>
      <p className="desc text-center">
        ZEUS is an open-source AI project tool for modern world to discover, create and share creative prompts
      </p>
      <Feed/>
    </section>
  )
}

export default Home





