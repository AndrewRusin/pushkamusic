
import { ForwardedRef, forwardRef } from "react";
import { FilterCheckboxProps } from "./FilterCheckbox.props";
import styles from "./FilterCheckbox.module.css"

// eslint-disable-next-line react/display-name
 export const FilterCheckbox = forwardRef(({filterItems=null,filterChecked , ...props}: FilterCheckboxProps, ref:ForwardedRef<HTMLInputElement>):JSX.Element =>{
   
    if (filterItems) {
    return(
        <div className={styles.filter_block}>
            {Object.entries(filterItems).map(([key, value], index) => (
                 <div key={index} className={styles.filter_group}>
                    <b>{key}</b>
                    {value.map(item=>(
                        <div key={item._id}><label ><input  type="checkbox" name="params" id={item._id} defaultChecked={filterChecked && filterChecked.includes(item.filterValue)} value={item.filterValue} ref={ref} {...props}/> {item.filterItem}</label></div>
                    ))}
                </div>   
            ))}       
        </div>
    )
    }else {
        return  <div>Заполните фильтр</div>         
    }

})


