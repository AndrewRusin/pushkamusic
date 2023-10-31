
import { ForwardedRef, forwardRef } from "react";
import { FilterCheckboxProps } from "./FilterCheckbox.props";
import styles from "./FilterCheckbox.module.css"

// eslint-disable-next-line react/display-name
 export const FilterCheckbox = forwardRef(({filterItems=null, ...props}: FilterCheckboxProps, ref:ForwardedRef<HTMLInputElement>):JSX.Element =>{
   
    if (filterItems) {
    return(
        <div className={styles.filter_block}>
            {Object.entries(filterItems).map(([key, value]) => (
                 <div key={key} className={styles.filter_group}>
                    <b>{key}</b>
                    {value.map(item=>(
                        <div><label key={item._id}><input  type="checkbox" name="params" id={item._id} value={item.filterValue} ref={ref} {...props}/> {item.filterItem}</label></div>
                    ))}
                </div>   
            ))}       
        </div>
    )
    }else {
        return  <div>Заполните фильтр</div>         
    }

})


