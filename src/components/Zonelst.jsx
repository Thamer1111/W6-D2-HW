function Zonelst(el) {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class=" card m-5 w-100 h-100 " style={{
                backgroundImage: `url(${el.background})`,
                backgroundSize: "cover",
            }}>

                <div class="m-auto m-5">
                    <img src={el.Logo} width={130} alt="" />
                </div>
                
            </div>
        </div >
    )
}

export default Zonelst;