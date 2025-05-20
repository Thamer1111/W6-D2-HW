function Zonelst(el) {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class=" card d-flex justify-content-center align-items-center my-3" style={{
                backgroundImage: `url(${el.background})`,
                backgroundSize: "cover",
                width: 400,
                height: 300,
            }}>

                <img src={el.Logo} width={130} alt="" />
            </div>
        </div >
    )
}

export default Zonelst;