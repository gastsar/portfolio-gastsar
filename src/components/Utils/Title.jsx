
export function Title({title}) {

    return (
        < >
   <p className="title"><span className="title__index">/</span><span>{title}</span></p>
        </>

    )
}

export function Subtitle({subtitle}) {

    return (
        < >
   <p className="title"><span className="title__index">#</span><span>{subtitle}</span></p>
        </>

    )
}
