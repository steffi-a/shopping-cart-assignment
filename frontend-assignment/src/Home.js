import NavigationBar from "./components/navigation/navigation";
import categories from './server/categories/index.get.json';
import Banner from "./components/banner/banner";
function Home(prop){
    return(
        <div>
            <NavigationBar/>
            {categories?.map((data,index) => (
                 <Banner type={data.name}
                    desc={data.description}
                    key={data.key}
                    id={data.id}
                    index={index}
                    img={data.imageUrl}
                 />
                //console.log('data', data)
               
            ))}
            {/* <Banner type="fruits and vegetables" desc="a variety of fresh fruits and vegetables" btnName="Explore Fruit and veg"/> */}
        </div>
    )
}

export default Home;