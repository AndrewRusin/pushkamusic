
import { ForwardedRef, forwardRef } from "react";
import { FilterCheckboxProps } from "./FilterCheckbox.props";


// eslint-disable-next-line react/display-name
 export const FilterCheckbox = forwardRef(({filterItems=null, ...props}: FilterCheckboxProps, ref:ForwardedRef<HTMLInputElement>):JSX.Element =>{
   
    if (filterItems) {
    return(
        <div className="filterGroup">
            
                
            
            {Object.entries(filterItems).map(([key, value]) => (
                 <div key={key}>
                    <p>{key}</p>
                    {value.map(item=>(
                        <label key={item._id}><input  type="checkbox" name="params" id={item._id} value={item.filterValue} ref={ref} {...props}/> {item.filterItem}</label>
                    ))}
                </div>   
            ))}       
        </div>
    )
    }else {
        return  <div>Заполните фильтр</div>         
    }

})


