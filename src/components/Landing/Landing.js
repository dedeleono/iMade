const Landing = (props) => {

    let slider = {
        overflow: "hidden",
    }

    let figure = {
        position: "relative",
        width: "auto",
        margin: "0",
        left: "0",
        animation: "20s slider infinte"
    }

    let img = {
        width: "20%",
        float: "left"
    }

    return(
        <>
            <div className="container w-full h-2/3 my-10 flex flex-row z-10 rounded-3xl shadow-md">
                <div className={`flex flex-1 rounded-3xl ${slider}`}>
                    <div className={`${figure}`}>
                        <img alt="" className={`${img}`}>lel</img>
                        <img alt="" className={`${img}`}>lil</img>
                        <img alt="" className={`${img}`}>lol</img>
                        <img alt="" className={`${img}`}>lul</img>
                    </div>
                </div>
                <div className="flex flex-1 px-10">Logo</div>
            </div>
        </>
    )
}

export default Landing;