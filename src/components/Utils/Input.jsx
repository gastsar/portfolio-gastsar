/**
 * @param {string}placeholder
 * @param {string}value
 * @param {(s.string=> void)}onChange

 */

import { forwardRef } from "react"
import { useId } from "react"

export const Input = forwardRef(({ placeholder, onChange, value, label }, ref)=> {
    const id = useId()
    return (
        <div className="from-check" >
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                ref={ref} type="text"
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)} />
        </div>

    )

})
Input.displayName = "InputComponent"

