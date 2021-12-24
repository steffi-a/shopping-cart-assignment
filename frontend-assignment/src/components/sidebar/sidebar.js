import './sidebar.css';
import categories from '../../server/categories/index.get.json'


function Sidebar({selected,setSelected}){
    return(
        <div class='sidebar-container'>
            {categories?.map((data, index) => (
                //console.log("&&&&&&", data)
            <div
                onClick={() => setSelected(data?.id)}
                id={selected === data?.id && "selected-catogey-card"}
                className="catogery-list-card"
                key={data?.id}
            >
          {data.name}
        </div>
      ))}
        </div>
    )
}

export default Sidebar;