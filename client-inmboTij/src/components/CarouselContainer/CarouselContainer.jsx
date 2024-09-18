const CarouselContainer = () => {
    return (
        <section className="carousel-sec" >
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators" id="contactForm">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div>
                        <div className='style-div center-div m-auto'>
                        </div>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active p-2 caja-car ">
                            <div className="text-center p-5 m-auto w-75 ">
                                <p className="fw-semibold">“We hired Mindters to help us find a new social media manager, and as a result, our social platforms experienced growth of over 80%. We highly recommend their services!."</p>
                                <div className="my-4">
                                        <p className="fw-light ">Tobi Moreyra. CA</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item p-2 caja-car ">
                            <div className="text-center p-5 m-auto w-75 " >
                                <p className="fw-semibold">"The Mindters team helped me recruit a Revit specialist for my 4ew company. The new architect has been performing great so far.”</p>
                                <div className="my-4">
                                    <p className="fw-light ">Zryan, Architecture Studio owner, NY</p>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item p-2 caja-car ">
                            <div className="text-center p-5 m-auto w-75 ">
                                <p className="fw-semibold">
                                "Mindters did a fantastic job assisting us in finding a new architect for our company. The new team member has been performing exceptionally well. We appreciate their assistance in bringing this talented addition to our team."</p>
                                <div className="my-4">
                                    <p className="fw-light">Colin Lowry, CLAD INC, San Diego</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>
        </section>
    )
};
export default CarouselContainer